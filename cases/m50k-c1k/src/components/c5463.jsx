import React from 'react';
const LABEL_5463 = 'component_5463';
export function Component5463({ value = 5463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5463, 'data-value': derived.doubled }, children);
}
export default Component5463;
