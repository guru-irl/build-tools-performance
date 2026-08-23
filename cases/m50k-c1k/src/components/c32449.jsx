import React from 'react';
const LABEL_32449 = 'component_32449';
export function Component32449({ value = 32449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32449, 'data-value': derived.doubled }, children);
}
export default Component32449;
