import React from 'react';
const LABEL_20585 = 'component_20585';
export function Component20585({ value = 20585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20585, 'data-value': derived.doubled }, children);
}
export default Component20585;
