import React from 'react';
const LABEL_20890 = 'component_20890';
export function Component20890({ value = 20890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20890, 'data-value': derived.doubled }, children);
}
export default Component20890;
