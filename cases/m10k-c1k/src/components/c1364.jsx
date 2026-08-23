import React from 'react';
const LABEL_1364 = 'component_1364';
export function Component1364({ value = 1364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1364, 'data-value': derived.doubled }, children);
}
export default Component1364;
