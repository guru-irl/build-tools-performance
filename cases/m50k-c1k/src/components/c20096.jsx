import React from 'react';
const LABEL_20096 = 'component_20096';
export function Component20096({ value = 20096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20096, 'data-value': derived.doubled }, children);
}
export default Component20096;
