import React from 'react';
const LABEL_17863 = 'component_17863';
export function Component17863({ value = 17863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17863, 'data-value': derived.doubled }, children);
}
export default Component17863;
