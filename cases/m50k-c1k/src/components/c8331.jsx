import React from 'react';
const LABEL_8331 = 'component_8331';
export function Component8331({ value = 8331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8331, 'data-value': derived.doubled }, children);
}
export default Component8331;
