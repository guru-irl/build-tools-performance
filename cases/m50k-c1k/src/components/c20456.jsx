import React from 'react';
const LABEL_20456 = 'component_20456';
export function Component20456({ value = 20456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20456, 'data-value': derived.doubled }, children);
}
export default Component20456;
