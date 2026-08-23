import React from 'react';
const LABEL_46251 = 'component_46251';
export function Component46251({ value = 46251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46251, 'data-value': derived.doubled }, children);
}
export default Component46251;
