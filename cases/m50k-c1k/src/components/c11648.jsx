import React from 'react';
const LABEL_11648 = 'component_11648';
export function Component11648({ value = 11648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11648, 'data-value': derived.doubled }, children);
}
export default Component11648;
