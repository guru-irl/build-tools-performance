import React from 'react';
const LABEL_16103 = 'component_16103';
export function Component16103({ value = 16103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16103, 'data-value': derived.doubled }, children);
}
export default Component16103;
