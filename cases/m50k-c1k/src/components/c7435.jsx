import React from 'react';
const LABEL_7435 = 'component_7435';
export function Component7435({ value = 7435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7435, 'data-value': derived.doubled }, children);
}
export default Component7435;
