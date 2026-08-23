import React from 'react';
const LABEL_46245 = 'component_46245';
export function Component46245({ value = 46245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46245, 'data-value': derived.doubled }, children);
}
export default Component46245;
