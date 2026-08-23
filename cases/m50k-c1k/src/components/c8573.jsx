import React from 'react';
const LABEL_8573 = 'component_8573';
export function Component8573({ value = 8573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8573, 'data-value': derived.doubled }, children);
}
export default Component8573;
