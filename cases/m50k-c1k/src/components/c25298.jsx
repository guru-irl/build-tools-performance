import React from 'react';
const LABEL_25298 = 'component_25298';
export function Component25298({ value = 25298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25298, 'data-value': derived.doubled }, children);
}
export default Component25298;
