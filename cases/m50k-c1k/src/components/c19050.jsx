import React from 'react';
const LABEL_19050 = 'component_19050';
export function Component19050({ value = 19050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19050, 'data-value': derived.doubled }, children);
}
export default Component19050;
