import React from 'react';
const LABEL_30338 = 'component_30338';
export function Component30338({ value = 30338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30338, 'data-value': derived.doubled }, children);
}
export default Component30338;
