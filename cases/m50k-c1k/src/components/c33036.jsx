import React from 'react';
const LABEL_33036 = 'component_33036';
export function Component33036({ value = 33036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33036, 'data-value': derived.doubled }, children);
}
export default Component33036;
