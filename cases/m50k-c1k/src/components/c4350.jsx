import React from 'react';
const LABEL_4350 = 'component_4350';
export function Component4350({ value = 4350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4350, 'data-value': derived.doubled }, children);
}
export default Component4350;
