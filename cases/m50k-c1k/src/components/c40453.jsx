import React from 'react';
const LABEL_40453 = 'component_40453';
export function Component40453({ value = 40453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40453, 'data-value': derived.doubled }, children);
}
export default Component40453;
