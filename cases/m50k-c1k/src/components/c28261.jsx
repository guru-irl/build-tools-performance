import React from 'react';
const LABEL_28261 = 'component_28261';
export function Component28261({ value = 28261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28261, 'data-value': derived.doubled }, children);
}
export default Component28261;
