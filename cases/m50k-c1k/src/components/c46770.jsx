import React from 'react';
const LABEL_46770 = 'component_46770';
export function Component46770({ value = 46770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46770, 'data-value': derived.doubled }, children);
}
export default Component46770;
