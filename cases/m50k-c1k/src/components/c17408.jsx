import React from 'react';
const LABEL_17408 = 'component_17408';
export function Component17408({ value = 17408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17408, 'data-value': derived.doubled }, children);
}
export default Component17408;
