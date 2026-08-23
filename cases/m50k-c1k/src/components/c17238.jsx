import React from 'react';
const LABEL_17238 = 'component_17238';
export function Component17238({ value = 17238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17238, 'data-value': derived.doubled }, children);
}
export default Component17238;
