import React from 'react';
const LABEL_28209 = 'component_28209';
export function Component28209({ value = 28209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28209, 'data-value': derived.doubled }, children);
}
export default Component28209;
