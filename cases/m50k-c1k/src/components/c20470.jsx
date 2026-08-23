import React from 'react';
const LABEL_20470 = 'component_20470';
export function Component20470({ value = 20470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20470, 'data-value': derived.doubled }, children);
}
export default Component20470;
