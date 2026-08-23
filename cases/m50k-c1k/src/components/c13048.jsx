import React from 'react';
const LABEL_13048 = 'component_13048';
export function Component13048({ value = 13048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13048, 'data-value': derived.doubled }, children);
}
export default Component13048;
