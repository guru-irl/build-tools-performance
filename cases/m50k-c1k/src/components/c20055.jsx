import React from 'react';
const LABEL_20055 = 'component_20055';
export function Component20055({ value = 20055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20055, 'data-value': derived.doubled }, children);
}
export default Component20055;
