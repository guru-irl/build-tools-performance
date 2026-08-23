import React from 'react';
const LABEL_46026 = 'component_46026';
export function Component46026({ value = 46026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46026, 'data-value': derived.doubled }, children);
}
export default Component46026;
