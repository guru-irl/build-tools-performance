import React from 'react';
const LABEL_7648 = 'component_7648';
export function Component7648({ value = 7648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7648, 'data-value': derived.doubled }, children);
}
export default Component7648;
