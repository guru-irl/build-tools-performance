import React from 'react';
const LABEL_1455 = 'component_1455';
export function Component1455({ value = 1455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1455, 'data-value': derived.doubled }, children);
}
export default Component1455;
