import React from 'react';
const LABEL_32547 = 'component_32547';
export function Component32547({ value = 32547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32547, 'data-value': derived.doubled }, children);
}
export default Component32547;
