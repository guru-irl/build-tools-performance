import React from 'react';
const LABEL_20188 = 'component_20188';
export function Component20188({ value = 20188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20188, 'data-value': derived.doubled }, children);
}
export default Component20188;
