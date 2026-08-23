import React from 'react';
const LABEL_8313 = 'component_8313';
export function Component8313({ value = 8313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8313, 'data-value': derived.doubled }, children);
}
export default Component8313;
