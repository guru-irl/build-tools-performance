import React from 'react';
const LABEL_45298 = 'component_45298';
export function Component45298({ value = 45298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45298, 'data-value': derived.doubled }, children);
}
export default Component45298;
