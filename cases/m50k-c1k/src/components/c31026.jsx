import React from 'react';
const LABEL_31026 = 'component_31026';
export function Component31026({ value = 31026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31026, 'data-value': derived.doubled }, children);
}
export default Component31026;
