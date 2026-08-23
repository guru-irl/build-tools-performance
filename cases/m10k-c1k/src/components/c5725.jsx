import React from 'react';
const LABEL_5725 = 'component_5725';
export function Component5725({ value = 5725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5725, 'data-value': derived.doubled }, children);
}
export default Component5725;
