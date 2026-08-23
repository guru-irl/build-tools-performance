import React from 'react';
const LABEL_16204 = 'component_16204';
export function Component16204({ value = 16204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16204, 'data-value': derived.doubled }, children);
}
export default Component16204;
