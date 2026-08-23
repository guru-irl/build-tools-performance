import React from 'react';
const LABEL_7686 = 'component_7686';
export function Component7686({ value = 7686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7686, 'data-value': derived.doubled }, children);
}
export default Component7686;
