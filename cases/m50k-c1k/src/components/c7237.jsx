import React from 'react';
const LABEL_7237 = 'component_7237';
export function Component7237({ value = 7237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7237, 'data-value': derived.doubled }, children);
}
export default Component7237;
