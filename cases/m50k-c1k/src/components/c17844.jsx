import React from 'react';
const LABEL_17844 = 'component_17844';
export function Component17844({ value = 17844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17844, 'data-value': derived.doubled }, children);
}
export default Component17844;
