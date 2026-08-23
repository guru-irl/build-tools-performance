import React from 'react';
const LABEL_46425 = 'component_46425';
export function Component46425({ value = 46425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46425, 'data-value': derived.doubled }, children);
}
export default Component46425;
