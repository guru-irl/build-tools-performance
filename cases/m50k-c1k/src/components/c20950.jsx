import React from 'react';
const LABEL_20950 = 'component_20950';
export function Component20950({ value = 20950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20950, 'data-value': derived.doubled }, children);
}
export default Component20950;
