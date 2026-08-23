import React from 'react';
const LABEL_15451 = 'component_15451';
export function Component15451({ value = 15451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15451, 'data-value': derived.doubled }, children);
}
export default Component15451;
