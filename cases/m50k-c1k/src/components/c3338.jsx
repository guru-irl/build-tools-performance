import React from 'react';
const LABEL_3338 = 'component_3338';
export function Component3338({ value = 3338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3338, 'data-value': derived.doubled }, children);
}
export default Component3338;
