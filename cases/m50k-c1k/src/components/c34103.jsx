import React from 'react';
const LABEL_34103 = 'component_34103';
export function Component34103({ value = 34103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34103, 'data-value': derived.doubled }, children);
}
export default Component34103;
