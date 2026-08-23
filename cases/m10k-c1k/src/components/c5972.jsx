import React from 'react';
const LABEL_5972 = 'component_5972';
export function Component5972({ value = 5972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5972, 'data-value': derived.doubled }, children);
}
export default Component5972;
