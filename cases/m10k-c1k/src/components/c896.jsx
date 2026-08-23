import React from 'react';
const LABEL_896 = 'component_896';
export function Component896({ value = 896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_896, 'data-value': derived.doubled }, children);
}
export default Component896;
