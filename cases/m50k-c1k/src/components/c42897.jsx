import React from 'react';
const LABEL_42897 = 'component_42897';
export function Component42897({ value = 42897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42897, 'data-value': derived.doubled }, children);
}
export default Component42897;
