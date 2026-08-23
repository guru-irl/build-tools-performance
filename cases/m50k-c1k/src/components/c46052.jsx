import React from 'react';
const LABEL_46052 = 'component_46052';
export function Component46052({ value = 46052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46052, 'data-value': derived.doubled }, children);
}
export default Component46052;
