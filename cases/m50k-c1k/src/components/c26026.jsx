import React from 'react';
const LABEL_26026 = 'component_26026';
export function Component26026({ value = 26026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26026, 'data-value': derived.doubled }, children);
}
export default Component26026;
