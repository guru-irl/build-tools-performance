import React from 'react';
const LABEL_770 = 'component_770';
export function Component770({ value = 770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_770, 'data-value': derived.doubled }, children);
}
export default Component770;
