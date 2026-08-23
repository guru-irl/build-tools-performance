import React from 'react';
const LABEL_31385 = 'component_31385';
export function Component31385({ value = 31385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31385, 'data-value': derived.doubled }, children);
}
export default Component31385;
