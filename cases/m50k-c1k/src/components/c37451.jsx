import React from 'react';
const LABEL_37451 = 'component_37451';
export function Component37451({ value = 37451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37451, 'data-value': derived.doubled }, children);
}
export default Component37451;
