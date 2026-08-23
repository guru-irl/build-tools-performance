import React from 'react';
const LABEL_44384 = 'component_44384';
export function Component44384({ value = 44384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44384, 'data-value': derived.doubled }, children);
}
export default Component44384;
