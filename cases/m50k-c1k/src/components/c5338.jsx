import React from 'react';
const LABEL_5338 = 'component_5338';
export function Component5338({ value = 5338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5338, 'data-value': derived.doubled }, children);
}
export default Component5338;
