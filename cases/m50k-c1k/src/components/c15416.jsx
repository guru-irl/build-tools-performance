import React from 'react';
const LABEL_15416 = 'component_15416';
export function Component15416({ value = 15416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15416, 'data-value': derived.doubled }, children);
}
export default Component15416;
