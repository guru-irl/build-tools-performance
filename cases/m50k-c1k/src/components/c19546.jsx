import React from 'react';
const LABEL_19546 = 'component_19546';
export function Component19546({ value = 19546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19546, 'data-value': derived.doubled }, children);
}
export default Component19546;
