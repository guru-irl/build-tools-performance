import React from 'react';
const LABEL_45972 = 'component_45972';
export function Component45972({ value = 45972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45972, 'data-value': derived.doubled }, children);
}
export default Component45972;
