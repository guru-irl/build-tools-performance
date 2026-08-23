import React from 'react';
const LABEL_15189 = 'component_15189';
export function Component15189({ value = 15189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15189, 'data-value': derived.doubled }, children);
}
export default Component15189;
