import React from 'react';
const LABEL_43503 = 'component_43503';
export function Component43503({ value = 43503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43503, 'data-value': derived.doubled }, children);
}
export default Component43503;
