import React from 'react';
const LABEL_6349 = 'component_6349';
export function Component6349({ value = 6349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6349, 'data-value': derived.doubled }, children);
}
export default Component6349;
