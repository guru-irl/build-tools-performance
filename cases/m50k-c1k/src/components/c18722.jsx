import React from 'react';
const LABEL_18722 = 'component_18722';
export function Component18722({ value = 18722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18722, 'data-value': derived.doubled }, children);
}
export default Component18722;
