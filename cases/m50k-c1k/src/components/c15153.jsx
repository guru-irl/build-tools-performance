import React from 'react';
const LABEL_15153 = 'component_15153';
export function Component15153({ value = 15153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15153, 'data-value': derived.doubled }, children);
}
export default Component15153;
