import React from 'react';
const LABEL_34674 = 'component_34674';
export function Component34674({ value = 34674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34674, 'data-value': derived.doubled }, children);
}
export default Component34674;
