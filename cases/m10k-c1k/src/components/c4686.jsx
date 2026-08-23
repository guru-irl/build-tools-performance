import React from 'react';
const LABEL_4686 = 'component_4686';
export function Component4686({ value = 4686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4686, 'data-value': derived.doubled }, children);
}
export default Component4686;
