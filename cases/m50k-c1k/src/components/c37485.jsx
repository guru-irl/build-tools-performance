import React from 'react';
const LABEL_37485 = 'component_37485';
export function Component37485({ value = 37485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37485, 'data-value': derived.doubled }, children);
}
export default Component37485;
