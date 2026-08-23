import React from 'react';
const LABEL_31786 = 'component_31786';
export function Component31786({ value = 31786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31786, 'data-value': derived.doubled }, children);
}
export default Component31786;
