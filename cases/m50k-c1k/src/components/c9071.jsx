import React from 'react';
const LABEL_9071 = 'component_9071';
export function Component9071({ value = 9071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9071, 'data-value': derived.doubled }, children);
}
export default Component9071;
