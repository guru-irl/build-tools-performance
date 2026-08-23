import React from 'react';
const LABEL_6460 = 'component_6460';
export function Component6460({ value = 6460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6460, 'data-value': derived.doubled }, children);
}
export default Component6460;
