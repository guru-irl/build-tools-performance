import React from 'react';
const LABEL_7062 = 'component_7062';
export function Component7062({ value = 7062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7062, 'data-value': derived.doubled }, children);
}
export default Component7062;
