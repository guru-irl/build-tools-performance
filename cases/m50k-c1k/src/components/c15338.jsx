import React from 'react';
const LABEL_15338 = 'component_15338';
export function Component15338({ value = 15338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15338, 'data-value': derived.doubled }, children);
}
export default Component15338;
