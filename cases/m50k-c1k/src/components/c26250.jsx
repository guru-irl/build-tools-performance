import React from 'react';
const LABEL_26250 = 'component_26250';
export function Component26250({ value = 26250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26250, 'data-value': derived.doubled }, children);
}
export default Component26250;
