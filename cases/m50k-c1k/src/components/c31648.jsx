import React from 'react';
const LABEL_31648 = 'component_31648';
export function Component31648({ value = 31648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31648, 'data-value': derived.doubled }, children);
}
export default Component31648;
