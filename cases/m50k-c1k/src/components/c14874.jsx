import React from 'react';
const LABEL_14874 = 'component_14874';
export function Component14874({ value = 14874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14874, 'data-value': derived.doubled }, children);
}
export default Component14874;
