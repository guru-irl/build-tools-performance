import React from 'react';
const LABEL_34760 = 'component_34760';
export function Component34760({ value = 34760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34760, 'data-value': derived.doubled }, children);
}
export default Component34760;
