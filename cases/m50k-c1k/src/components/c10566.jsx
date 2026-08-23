import React from 'react';
const LABEL_10566 = 'component_10566';
export function Component10566({ value = 10566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10566, 'data-value': derived.doubled }, children);
}
export default Component10566;
