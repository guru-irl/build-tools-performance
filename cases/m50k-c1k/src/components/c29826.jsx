import React from 'react';
const LABEL_29826 = 'component_29826';
export function Component29826({ value = 29826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29826, 'data-value': derived.doubled }, children);
}
export default Component29826;
