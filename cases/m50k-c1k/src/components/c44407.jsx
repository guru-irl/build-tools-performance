import React from 'react';
const LABEL_44407 = 'component_44407';
export function Component44407({ value = 44407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44407, 'data-value': derived.doubled }, children);
}
export default Component44407;
