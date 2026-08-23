import React from 'react';
const LABEL_5026 = 'component_5026';
export function Component5026({ value = 5026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5026, 'data-value': derived.doubled }, children);
}
export default Component5026;
