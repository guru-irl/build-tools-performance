import React from 'react';
const LABEL_1140 = 'component_1140';
export function Component1140({ value = 1140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1140, 'data-value': derived.doubled }, children);
}
export default Component1140;
