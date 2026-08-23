import React from 'react';
const LABEL_42735 = 'component_42735';
export function Component42735({ value = 42735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42735, 'data-value': derived.doubled }, children);
}
export default Component42735;
