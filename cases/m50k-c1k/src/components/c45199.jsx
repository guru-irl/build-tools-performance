import React from 'react';
const LABEL_45199 = 'component_45199';
export function Component45199({ value = 45199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45199, 'data-value': derived.doubled }, children);
}
export default Component45199;
