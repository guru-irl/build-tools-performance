import React from 'react';
const LABEL_46648 = 'component_46648';
export function Component46648({ value = 46648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46648, 'data-value': derived.doubled }, children);
}
export default Component46648;
