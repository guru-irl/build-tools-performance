import React from 'react';
const LABEL_18642 = 'component_18642';
export function Component18642({ value = 18642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18642, 'data-value': derived.doubled }, children);
}
export default Component18642;
