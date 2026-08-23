import React from 'react';
const LABEL_7540 = 'component_7540';
export function Component7540({ value = 7540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7540, 'data-value': derived.doubled }, children);
}
export default Component7540;
