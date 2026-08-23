import React from 'react';
const LABEL_35669 = 'component_35669';
export function Component35669({ value = 35669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35669, 'data-value': derived.doubled }, children);
}
export default Component35669;
