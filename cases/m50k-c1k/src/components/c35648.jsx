import React from 'react';
const LABEL_35648 = 'component_35648';
export function Component35648({ value = 35648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35648, 'data-value': derived.doubled }, children);
}
export default Component35648;
