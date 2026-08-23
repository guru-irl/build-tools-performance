import React from 'react';
const LABEL_13652 = 'component_13652';
export function Component13652({ value = 13652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13652, 'data-value': derived.doubled }, children);
}
export default Component13652;
