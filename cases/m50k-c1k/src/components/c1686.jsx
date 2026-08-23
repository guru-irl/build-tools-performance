import React from 'react';
const LABEL_1686 = 'component_1686';
export function Component1686({ value = 1686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1686, 'data-value': derived.doubled }, children);
}
export default Component1686;
