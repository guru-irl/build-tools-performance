import React from 'react';
const LABEL_34699 = 'component_34699';
export function Component34699({ value = 34699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34699, 'data-value': derived.doubled }, children);
}
export default Component34699;
