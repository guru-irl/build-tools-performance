import React from 'react';
const LABEL_21514 = 'component_21514';
export function Component21514({ value = 21514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21514, 'data-value': derived.doubled }, children);
}
export default Component21514;
