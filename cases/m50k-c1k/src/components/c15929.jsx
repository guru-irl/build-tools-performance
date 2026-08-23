import React from 'react';
const LABEL_15929 = 'component_15929';
export function Component15929({ value = 15929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15929, 'data-value': derived.doubled }, children);
}
export default Component15929;
