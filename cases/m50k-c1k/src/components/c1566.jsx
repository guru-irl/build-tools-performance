import React from 'react';
const LABEL_1566 = 'component_1566';
export function Component1566({ value = 1566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1566, 'data-value': derived.doubled }, children);
}
export default Component1566;
