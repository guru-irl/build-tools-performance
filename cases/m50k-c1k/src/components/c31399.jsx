import React from 'react';
const LABEL_31399 = 'component_31399';
export function Component31399({ value = 31399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31399, 'data-value': derived.doubled }, children);
}
export default Component31399;
