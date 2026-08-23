import React from 'react';
const LABEL_46086 = 'component_46086';
export function Component46086({ value = 46086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46086, 'data-value': derived.doubled }, children);
}
export default Component46086;
