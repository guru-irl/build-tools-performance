import React from 'react';
const LABEL_1585 = 'component_1585';
export function Component1585({ value = 1585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1585, 'data-value': derived.doubled }, children);
}
export default Component1585;
