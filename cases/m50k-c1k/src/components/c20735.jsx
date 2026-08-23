import React from 'react';
const LABEL_20735 = 'component_20735';
export function Component20735({ value = 20735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20735, 'data-value': derived.doubled }, children);
}
export default Component20735;
