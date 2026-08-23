import React from 'react';
const LABEL_42034 = 'component_42034';
export function Component42034({ value = 42034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42034, 'data-value': derived.doubled }, children);
}
export default Component42034;
