import React from 'react';
const LABEL_43390 = 'component_43390';
export function Component43390({ value = 43390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43390, 'data-value': derived.doubled }, children);
}
export default Component43390;
