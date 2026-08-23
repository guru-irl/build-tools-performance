import React from 'react';
const LABEL_8338 = 'component_8338';
export function Component8338({ value = 8338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8338, 'data-value': derived.doubled }, children);
}
export default Component8338;
