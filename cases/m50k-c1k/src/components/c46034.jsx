import React from 'react';
const LABEL_46034 = 'component_46034';
export function Component46034({ value = 46034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46034, 'data-value': derived.doubled }, children);
}
export default Component46034;
