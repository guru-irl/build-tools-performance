import React from 'react';
const LABEL_10240 = 'component_10240';
export function Component10240({ value = 10240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10240, 'data-value': derived.doubled }, children);
}
export default Component10240;
