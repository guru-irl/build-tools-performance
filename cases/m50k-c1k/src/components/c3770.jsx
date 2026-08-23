import React from 'react';
const LABEL_3770 = 'component_3770';
export function Component3770({ value = 3770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3770, 'data-value': derived.doubled }, children);
}
export default Component3770;
