import React from 'react';
const LABEL_30464 = 'component_30464';
export function Component30464({ value = 30464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30464, 'data-value': derived.doubled }, children);
}
export default Component30464;
