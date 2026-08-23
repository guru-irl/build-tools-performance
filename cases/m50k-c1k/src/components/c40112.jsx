import React from 'react';
const LABEL_40112 = 'component_40112';
export function Component40112({ value = 40112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40112, 'data-value': derived.doubled }, children);
}
export default Component40112;
