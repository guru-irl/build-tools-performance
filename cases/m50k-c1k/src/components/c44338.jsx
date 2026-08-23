import React from 'react';
const LABEL_44338 = 'component_44338';
export function Component44338({ value = 44338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44338, 'data-value': derived.doubled }, children);
}
export default Component44338;
