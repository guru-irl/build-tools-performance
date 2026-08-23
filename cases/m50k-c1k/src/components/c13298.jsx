import React from 'react';
const LABEL_13298 = 'component_13298';
export function Component13298({ value = 13298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13298, 'data-value': derived.doubled }, children);
}
export default Component13298;
