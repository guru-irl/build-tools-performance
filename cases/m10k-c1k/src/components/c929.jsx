import React from 'react';
const LABEL_929 = 'component_929';
export function Component929({ value = 929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_929, 'data-value': derived.doubled }, children);
}
export default Component929;
