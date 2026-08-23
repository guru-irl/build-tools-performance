import React from 'react';
const LABEL_16585 = 'component_16585';
export function Component16585({ value = 16585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16585, 'data-value': derived.doubled }, children);
}
export default Component16585;
