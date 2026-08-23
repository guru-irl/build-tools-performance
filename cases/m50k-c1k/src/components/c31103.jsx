import React from 'react';
const LABEL_31103 = 'component_31103';
export function Component31103({ value = 31103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31103, 'data-value': derived.doubled }, children);
}
export default Component31103;
