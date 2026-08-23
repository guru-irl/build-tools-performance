import React from 'react';
const LABEL_31409 = 'component_31409';
export function Component31409({ value = 31409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31409, 'data-value': derived.doubled }, children);
}
export default Component31409;
