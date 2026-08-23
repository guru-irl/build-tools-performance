import React from 'react';
const LABEL_32584 = 'component_32584';
export function Component32584({ value = 32584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32584, 'data-value': derived.doubled }, children);
}
export default Component32584;
