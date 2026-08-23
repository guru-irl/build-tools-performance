import React from 'react';
const LABEL_4923 = 'component_4923';
export function Component4923({ value = 4923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4923, 'data-value': derived.doubled }, children);
}
export default Component4923;
