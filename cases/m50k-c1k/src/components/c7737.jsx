import React from 'react';
const LABEL_7737 = 'component_7737';
export function Component7737({ value = 7737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7737, 'data-value': derived.doubled }, children);
}
export default Component7737;
