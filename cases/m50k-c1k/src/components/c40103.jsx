import React from 'react';
const LABEL_40103 = 'component_40103';
export function Component40103({ value = 40103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40103, 'data-value': derived.doubled }, children);
}
export default Component40103;
