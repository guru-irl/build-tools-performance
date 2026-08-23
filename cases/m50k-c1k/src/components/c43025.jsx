import React from 'react';
const LABEL_43025 = 'component_43025';
export function Component43025({ value = 43025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43025, 'data-value': derived.doubled }, children);
}
export default Component43025;
