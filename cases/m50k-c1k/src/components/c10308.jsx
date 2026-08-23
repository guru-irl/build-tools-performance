import React from 'react';
const LABEL_10308 = 'component_10308';
export function Component10308({ value = 10308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10308, 'data-value': derived.doubled }, children);
}
export default Component10308;
