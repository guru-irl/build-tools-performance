import React from 'react';
const LABEL_5451 = 'component_5451';
export function Component5451({ value = 5451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5451, 'data-value': derived.doubled }, children);
}
export default Component5451;
