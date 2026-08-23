import React from 'react';
const LABEL_20875 = 'component_20875';
export function Component20875({ value = 20875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20875, 'data-value': derived.doubled }, children);
}
export default Component20875;
