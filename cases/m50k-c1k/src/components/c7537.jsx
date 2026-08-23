import React from 'react';
const LABEL_7537 = 'component_7537';
export function Component7537({ value = 7537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7537, 'data-value': derived.doubled }, children);
}
export default Component7537;
