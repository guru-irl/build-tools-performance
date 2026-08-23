import React from 'react';
const LABEL_45103 = 'component_45103';
export function Component45103({ value = 45103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45103, 'data-value': derived.doubled }, children);
}
export default Component45103;
