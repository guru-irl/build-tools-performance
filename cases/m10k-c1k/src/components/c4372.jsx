import React from 'react';
const LABEL_4372 = 'component_4372';
export function Component4372({ value = 4372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4372, 'data-value': derived.doubled }, children);
}
export default Component4372;
