import React from 'react';
const LABEL_46896 = 'component_46896';
export function Component46896({ value = 46896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46896, 'data-value': derived.doubled }, children);
}
export default Component46896;
