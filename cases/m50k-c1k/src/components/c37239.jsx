import React from 'react';
const LABEL_37239 = 'component_37239';
export function Component37239({ value = 37239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37239, 'data-value': derived.doubled }, children);
}
export default Component37239;
