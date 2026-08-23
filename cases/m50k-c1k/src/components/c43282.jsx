import React from 'react';
const LABEL_43282 = 'component_43282';
export function Component43282({ value = 43282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43282, 'data-value': derived.doubled }, children);
}
export default Component43282;
