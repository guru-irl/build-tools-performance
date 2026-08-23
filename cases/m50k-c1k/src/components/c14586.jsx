import React from 'react';
const LABEL_14586 = 'component_14586';
export function Component14586({ value = 14586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14586, 'data-value': derived.doubled }, children);
}
export default Component14586;
