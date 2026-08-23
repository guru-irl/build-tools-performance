import React from 'react';
const LABEL_32072 = 'component_32072';
export function Component32072({ value = 32072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32072, 'data-value': derived.doubled }, children);
}
export default Component32072;
