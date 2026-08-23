import React from 'react';
const LABEL_36686 = 'component_36686';
export function Component36686({ value = 36686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36686, 'data-value': derived.doubled }, children);
}
export default Component36686;
