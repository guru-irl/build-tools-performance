import React from 'react';
const LABEL_19568 = 'component_19568';
export function Component19568({ value = 19568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19568, 'data-value': derived.doubled }, children);
}
export default Component19568;
