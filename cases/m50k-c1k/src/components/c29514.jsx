import React from 'react';
const LABEL_29514 = 'component_29514';
export function Component29514({ value = 29514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29514, 'data-value': derived.doubled }, children);
}
export default Component29514;
