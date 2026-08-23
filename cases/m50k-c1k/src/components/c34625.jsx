import React from 'react';
const LABEL_34625 = 'component_34625';
export function Component34625({ value = 34625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34625, 'data-value': derived.doubled }, children);
}
export default Component34625;
