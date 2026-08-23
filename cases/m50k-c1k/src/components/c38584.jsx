import React from 'react';
const LABEL_38584 = 'component_38584';
export function Component38584({ value = 38584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38584, 'data-value': derived.doubled }, children);
}
export default Component38584;
