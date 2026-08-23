import React from 'react';
const LABEL_38425 = 'component_38425';
export function Component38425({ value = 38425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38425, 'data-value': derived.doubled }, children);
}
export default Component38425;
