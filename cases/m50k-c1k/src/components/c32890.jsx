import React from 'react';
const LABEL_32890 = 'component_32890';
export function Component32890({ value = 32890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32890, 'data-value': derived.doubled }, children);
}
export default Component32890;
