import React from 'react';
const LABEL_5816 = 'component_5816';
export function Component5816({ value = 5816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5816, 'data-value': derived.doubled }, children);
}
export default Component5816;
