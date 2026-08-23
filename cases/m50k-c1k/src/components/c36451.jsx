import React from 'react';
const LABEL_36451 = 'component_36451';
export function Component36451({ value = 36451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36451, 'data-value': derived.doubled }, children);
}
export default Component36451;
