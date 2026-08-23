import React from 'react';
const LABEL_13026 = 'component_13026';
export function Component13026({ value = 13026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13026, 'data-value': derived.doubled }, children);
}
export default Component13026;
