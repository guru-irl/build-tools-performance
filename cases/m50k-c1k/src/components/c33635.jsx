import React from 'react';
const LABEL_33635 = 'component_33635';
export function Component33635({ value = 33635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33635, 'data-value': derived.doubled }, children);
}
export default Component33635;
