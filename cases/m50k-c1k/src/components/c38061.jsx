import React from 'react';
const LABEL_38061 = 'component_38061';
export function Component38061({ value = 38061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38061, 'data-value': derived.doubled }, children);
}
export default Component38061;
