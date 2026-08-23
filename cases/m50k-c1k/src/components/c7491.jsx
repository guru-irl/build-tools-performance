import React from 'react';
const LABEL_7491 = 'component_7491';
export function Component7491({ value = 7491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7491, 'data-value': derived.doubled }, children);
}
export default Component7491;
