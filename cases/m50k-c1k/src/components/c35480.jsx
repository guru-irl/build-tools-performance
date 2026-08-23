import React from 'react';
const LABEL_35480 = 'component_35480';
export function Component35480({ value = 35480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35480, 'data-value': derived.doubled }, children);
}
export default Component35480;
