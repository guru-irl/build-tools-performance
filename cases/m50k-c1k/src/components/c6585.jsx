import React from 'react';
const LABEL_6585 = 'component_6585';
export function Component6585({ value = 6585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6585, 'data-value': derived.doubled }, children);
}
export default Component6585;
