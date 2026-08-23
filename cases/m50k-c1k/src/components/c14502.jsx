import React from 'react';
const LABEL_14502 = 'component_14502';
export function Component14502({ value = 14502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14502, 'data-value': derived.doubled }, children);
}
export default Component14502;
