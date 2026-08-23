import React from 'react';
const LABEL_25959 = 'component_25959';
export function Component25959({ value = 25959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25959, 'data-value': derived.doubled }, children);
}
export default Component25959;
