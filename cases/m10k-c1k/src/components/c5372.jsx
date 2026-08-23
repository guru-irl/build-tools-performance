import React from 'react';
const LABEL_5372 = 'component_5372';
export function Component5372({ value = 5372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5372, 'data-value': derived.doubled }, children);
}
export default Component5372;
