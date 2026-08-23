import React from 'react';
const LABEL_30307 = 'component_30307';
export function Component30307({ value = 30307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30307, 'data-value': derived.doubled }, children);
}
export default Component30307;
