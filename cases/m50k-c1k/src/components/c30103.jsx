import React from 'react';
const LABEL_30103 = 'component_30103';
export function Component30103({ value = 30103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30103, 'data-value': derived.doubled }, children);
}
export default Component30103;
