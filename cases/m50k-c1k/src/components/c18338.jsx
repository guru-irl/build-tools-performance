import React from 'react';
const LABEL_18338 = 'component_18338';
export function Component18338({ value = 18338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18338, 'data-value': derived.doubled }, children);
}
export default Component18338;
