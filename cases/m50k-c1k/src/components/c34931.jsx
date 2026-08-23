import React from 'react';
const LABEL_34931 = 'component_34931';
export function Component34931({ value = 34931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34931, 'data-value': derived.doubled }, children);
}
export default Component34931;
