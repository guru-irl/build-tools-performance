import React from 'react';
const LABEL_14349 = 'component_14349';
export function Component14349({ value = 14349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14349, 'data-value': derived.doubled }, children);
}
export default Component14349;
