import React from 'react';
const LABEL_7034 = 'component_7034';
export function Component7034({ value = 7034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7034, 'data-value': derived.doubled }, children);
}
export default Component7034;
