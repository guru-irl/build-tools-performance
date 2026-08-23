import React from 'react';
const LABEL_31592 = 'component_31592';
export function Component31592({ value = 31592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31592, 'data-value': derived.doubled }, children);
}
export default Component31592;
