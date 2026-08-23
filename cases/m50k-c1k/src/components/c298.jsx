import React from 'react';
const LABEL_298 = 'component_298';
export function Component298({ value = 298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_298, 'data-value': derived.doubled }, children);
}
export default Component298;
