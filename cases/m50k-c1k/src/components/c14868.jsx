import React from 'react';
const LABEL_14868 = 'component_14868';
export function Component14868({ value = 14868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14868, 'data-value': derived.doubled }, children);
}
export default Component14868;
