import React from 'react';
const LABEL_28645 = 'component_28645';
export function Component28645({ value = 28645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28645, 'data-value': derived.doubled }, children);
}
export default Component28645;
