import React from 'react';
const LABEL_35345 = 'component_35345';
export function Component35345({ value = 35345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35345, 'data-value': derived.doubled }, children);
}
export default Component35345;
