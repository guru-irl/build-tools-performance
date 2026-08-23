import React from 'react';
const LABEL_38808 = 'component_38808';
export function Component38808({ value = 38808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38808, 'data-value': derived.doubled }, children);
}
export default Component38808;
