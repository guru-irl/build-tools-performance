import React from 'react';
const LABEL_8840 = 'component_8840';
export function Component8840({ value = 8840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8840, 'data-value': derived.doubled }, children);
}
export default Component8840;
