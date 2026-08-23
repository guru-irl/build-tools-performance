import React from 'react';
const LABEL_16099 = 'component_16099';
export function Component16099({ value = 16099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16099, 'data-value': derived.doubled }, children);
}
export default Component16099;
