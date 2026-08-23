import React from 'react';
const LABEL_23624 = 'component_23624';
export function Component23624({ value = 23624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23624, 'data-value': derived.doubled }, children);
}
export default Component23624;
