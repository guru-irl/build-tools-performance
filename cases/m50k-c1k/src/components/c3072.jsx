import React from 'react';
const LABEL_3072 = 'component_3072';
export function Component3072({ value = 3072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3072, 'data-value': derived.doubled }, children);
}
export default Component3072;
