import React from 'react';
const LABEL_6219 = 'component_6219';
export function Component6219({ value = 6219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6219, 'data-value': derived.doubled }, children);
}
export default Component6219;
