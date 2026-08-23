import React from 'react';
const LABEL_12832 = 'component_12832';
export function Component12832({ value = 12832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12832, 'data-value': derived.doubled }, children);
}
export default Component12832;
