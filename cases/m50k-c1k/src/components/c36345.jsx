import React from 'react';
const LABEL_36345 = 'component_36345';
export function Component36345({ value = 36345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36345, 'data-value': derived.doubled }, children);
}
export default Component36345;
