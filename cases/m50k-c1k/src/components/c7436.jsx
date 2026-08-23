import React from 'react';
const LABEL_7436 = 'component_7436';
export function Component7436({ value = 7436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7436, 'data-value': derived.doubled }, children);
}
export default Component7436;
