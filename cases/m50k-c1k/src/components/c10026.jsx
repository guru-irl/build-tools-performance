import React from 'react';
const LABEL_10026 = 'component_10026';
export function Component10026({ value = 10026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10026, 'data-value': derived.doubled }, children);
}
export default Component10026;
