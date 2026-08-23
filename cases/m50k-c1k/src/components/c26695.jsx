import React from 'react';
const LABEL_26695 = 'component_26695';
export function Component26695({ value = 26695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26695, 'data-value': derived.doubled }, children);
}
export default Component26695;
