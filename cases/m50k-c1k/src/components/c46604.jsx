import React from 'react';
const LABEL_46604 = 'component_46604';
export function Component46604({ value = 46604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46604, 'data-value': derived.doubled }, children);
}
export default Component46604;
