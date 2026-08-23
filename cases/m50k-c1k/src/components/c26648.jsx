import React from 'react';
const LABEL_26648 = 'component_26648';
export function Component26648({ value = 26648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26648, 'data-value': derived.doubled }, children);
}
export default Component26648;
