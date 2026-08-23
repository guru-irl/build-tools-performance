import React from 'react';
const LABEL_37923 = 'component_37923';
export function Component37923({ value = 37923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37923, 'data-value': derived.doubled }, children);
}
export default Component37923;
