import React from 'react';
const LABEL_6945 = 'component_6945';
export function Component6945({ value = 6945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6945, 'data-value': derived.doubled }, children);
}
export default Component6945;
