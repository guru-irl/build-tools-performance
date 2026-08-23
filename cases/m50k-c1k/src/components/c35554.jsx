import React from 'react';
const LABEL_35554 = 'component_35554';
export function Component35554({ value = 35554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35554, 'data-value': derived.doubled }, children);
}
export default Component35554;
