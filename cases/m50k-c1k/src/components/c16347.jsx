import React from 'react';
const LABEL_16347 = 'component_16347';
export function Component16347({ value = 16347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16347, 'data-value': derived.doubled }, children);
}
export default Component16347;
