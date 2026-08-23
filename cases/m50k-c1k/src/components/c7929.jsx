import React from 'react';
const LABEL_7929 = 'component_7929';
export function Component7929({ value = 7929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7929, 'data-value': derived.doubled }, children);
}
export default Component7929;
