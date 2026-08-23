import React from 'react';
const LABEL_8676 = 'component_8676';
export function Component8676({ value = 8676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8676, 'data-value': derived.doubled }, children);
}
export default Component8676;
