import React from 'react';
const LABEL_8260 = 'component_8260';
export function Component8260({ value = 8260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8260, 'data-value': derived.doubled }, children);
}
export default Component8260;
