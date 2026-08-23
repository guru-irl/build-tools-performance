import React from 'react';
const LABEL_42073 = 'component_42073';
export function Component42073({ value = 42073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42073, 'data-value': derived.doubled }, children);
}
export default Component42073;
