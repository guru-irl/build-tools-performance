import React from 'react';
const LABEL_34754 = 'component_34754';
export function Component34754({ value = 34754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34754, 'data-value': derived.doubled }, children);
}
export default Component34754;
