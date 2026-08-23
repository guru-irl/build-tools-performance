import React from 'react';
const LABEL_19137 = 'component_19137';
export function Component19137({ value = 19137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19137, 'data-value': derived.doubled }, children);
}
export default Component19137;
