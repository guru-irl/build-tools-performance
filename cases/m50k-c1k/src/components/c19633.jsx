import React from 'react';
const LABEL_19633 = 'component_19633';
export function Component19633({ value = 19633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19633, 'data-value': derived.doubled }, children);
}
export default Component19633;
