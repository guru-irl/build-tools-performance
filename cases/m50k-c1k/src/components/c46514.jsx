import React from 'react';
const LABEL_46514 = 'component_46514';
export function Component46514({ value = 46514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46514, 'data-value': derived.doubled }, children);
}
export default Component46514;
