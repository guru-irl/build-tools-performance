import React from 'react';
const LABEL_1338 = 'component_1338';
export function Component1338({ value = 1338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1338, 'data-value': derived.doubled }, children);
}
export default Component1338;
