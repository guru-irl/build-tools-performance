import React from 'react';
const LABEL_6566 = 'component_6566';
export function Component6566({ value = 6566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6566, 'data-value': derived.doubled }, children);
}
export default Component6566;
