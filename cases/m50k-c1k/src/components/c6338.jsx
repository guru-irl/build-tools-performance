import React from 'react';
const LABEL_6338 = 'component_6338';
export function Component6338({ value = 6338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6338, 'data-value': derived.doubled }, children);
}
export default Component6338;
