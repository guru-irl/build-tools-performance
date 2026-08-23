import React from 'react';
const LABEL_34112 = 'component_34112';
export function Component34112({ value = 34112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34112, 'data-value': derived.doubled }, children);
}
export default Component34112;
