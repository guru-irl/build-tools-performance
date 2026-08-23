import React from 'react';
const LABEL_46162 = 'component_46162';
export function Component46162({ value = 46162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46162, 'data-value': derived.doubled }, children);
}
export default Component46162;
