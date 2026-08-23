import React from 'react';
const LABEL_16026 = 'component_16026';
export function Component16026({ value = 16026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16026, 'data-value': derived.doubled }, children);
}
export default Component16026;
