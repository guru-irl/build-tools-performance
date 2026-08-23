import React from 'react';
const LABEL_43308 = 'component_43308';
export function Component43308({ value = 43308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43308, 'data-value': derived.doubled }, children);
}
export default Component43308;
