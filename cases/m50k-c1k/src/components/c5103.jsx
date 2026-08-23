import React from 'react';
const LABEL_5103 = 'component_5103';
export function Component5103({ value = 5103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5103, 'data-value': derived.doubled }, children);
}
export default Component5103;
