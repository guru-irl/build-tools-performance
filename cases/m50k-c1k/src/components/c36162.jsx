import React from 'react';
const LABEL_36162 = 'component_36162';
export function Component36162({ value = 36162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36162, 'data-value': derived.doubled }, children);
}
export default Component36162;
