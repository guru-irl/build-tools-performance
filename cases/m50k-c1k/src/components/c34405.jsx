import React from 'react';
const LABEL_34405 = 'component_34405';
export function Component34405({ value = 34405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34405, 'data-value': derived.doubled }, children);
}
export default Component34405;
