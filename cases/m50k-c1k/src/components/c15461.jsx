import React from 'react';
const LABEL_15461 = 'component_15461';
export function Component15461({ value = 15461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15461, 'data-value': derived.doubled }, children);
}
export default Component15461;
