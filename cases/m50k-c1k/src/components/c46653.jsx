import React from 'react';
const LABEL_46653 = 'component_46653';
export function Component46653({ value = 46653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46653, 'data-value': derived.doubled }, children);
}
export default Component46653;
