import React from 'react';
const LABEL_45177 = 'component_45177';
export function Component45177({ value = 45177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45177, 'data-value': derived.doubled }, children);
}
export default Component45177;
