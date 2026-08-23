import React from 'react';
const LABEL_42026 = 'component_42026';
export function Component42026({ value = 42026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42026, 'data-value': derived.doubled }, children);
}
export default Component42026;
