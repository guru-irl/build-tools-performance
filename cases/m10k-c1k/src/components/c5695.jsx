import React from 'react';
const LABEL_5695 = 'component_5695';
export function Component5695({ value = 5695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5695, 'data-value': derived.doubled }, children);
}
export default Component5695;
