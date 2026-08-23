import React from 'react';
const LABEL_35302 = 'component_35302';
export function Component35302({ value = 35302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35302, 'data-value': derived.doubled }, children);
}
export default Component35302;
