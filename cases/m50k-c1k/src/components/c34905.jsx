import React from 'react';
const LABEL_34905 = 'component_34905';
export function Component34905({ value = 34905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34905, 'data-value': derived.doubled }, children);
}
export default Component34905;
