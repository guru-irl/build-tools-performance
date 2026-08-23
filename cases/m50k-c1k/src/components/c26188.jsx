import React from 'react';
const LABEL_26188 = 'component_26188';
export function Component26188({ value = 26188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26188, 'data-value': derived.doubled }, children);
}
export default Component26188;
