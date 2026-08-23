import React from 'react';
const LABEL_34174 = 'component_34174';
export function Component34174({ value = 34174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34174, 'data-value': derived.doubled }, children);
}
export default Component34174;
