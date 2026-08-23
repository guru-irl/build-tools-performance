import React from 'react';
const LABEL_1238 = 'component_1238';
export function Component1238({ value = 1238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1238, 'data-value': derived.doubled }, children);
}
export default Component1238;
