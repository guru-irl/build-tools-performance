import React from 'react';
const LABEL_10237 = 'component_10237';
export function Component10237({ value = 10237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10237, 'data-value': derived.doubled }, children);
}
export default Component10237;
