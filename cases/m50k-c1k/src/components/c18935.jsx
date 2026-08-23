import React from 'react';
const LABEL_18935 = 'component_18935';
export function Component18935({ value = 18935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18935, 'data-value': derived.doubled }, children);
}
export default Component18935;
