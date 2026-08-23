import React from 'react';
const LABEL_38112 = 'component_38112';
export function Component38112({ value = 38112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38112, 'data-value': derived.doubled }, children);
}
export default Component38112;
