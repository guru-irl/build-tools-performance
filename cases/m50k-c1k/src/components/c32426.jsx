import React from 'react';
const LABEL_32426 = 'component_32426';
export function Component32426({ value = 32426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32426, 'data-value': derived.doubled }, children);
}
export default Component32426;
