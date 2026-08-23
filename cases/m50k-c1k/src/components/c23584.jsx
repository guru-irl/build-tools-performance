import React from 'react';
const LABEL_23584 = 'component_23584';
export function Component23584({ value = 23584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23584, 'data-value': derived.doubled }, children);
}
export default Component23584;
