import React from 'react';
const LABEL_35392 = 'component_35392';
export function Component35392({ value = 35392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35392, 'data-value': derived.doubled }, children);
}
export default Component35392;
