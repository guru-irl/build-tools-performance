import React from 'react';
const LABEL_20563 = 'component_20563';
export function Component20563({ value = 20563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20563, 'data-value': derived.doubled }, children);
}
export default Component20563;
