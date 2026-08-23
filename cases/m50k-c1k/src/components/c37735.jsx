import React from 'react';
const LABEL_37735 = 'component_37735';
export function Component37735({ value = 37735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37735, 'data-value': derived.doubled }, children);
}
export default Component37735;
