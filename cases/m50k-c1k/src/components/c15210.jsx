import React from 'react';
const LABEL_15210 = 'component_15210';
export function Component15210({ value = 15210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15210, 'data-value': derived.doubled }, children);
}
export default Component15210;
