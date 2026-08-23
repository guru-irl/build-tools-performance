import React from 'react';
const LABEL_12896 = 'component_12896';
export function Component12896({ value = 12896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12896, 'data-value': derived.doubled }, children);
}
export default Component12896;
