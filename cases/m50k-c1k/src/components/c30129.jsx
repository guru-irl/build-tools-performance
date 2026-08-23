import React from 'react';
const LABEL_30129 = 'component_30129';
export function Component30129({ value = 30129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30129, 'data-value': derived.doubled }, children);
}
export default Component30129;
