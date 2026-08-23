import React from 'react';
const LABEL_14136 = 'component_14136';
export function Component14136({ value = 14136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14136, 'data-value': derived.doubled }, children);
}
export default Component14136;
