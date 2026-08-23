import React from 'react';
const LABEL_7221 = 'component_7221';
export function Component7221({ value = 7221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7221, 'data-value': derived.doubled }, children);
}
export default Component7221;
