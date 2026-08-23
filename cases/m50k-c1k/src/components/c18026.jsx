import React from 'react';
const LABEL_18026 = 'component_18026';
export function Component18026({ value = 18026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18026, 'data-value': derived.doubled }, children);
}
export default Component18026;
