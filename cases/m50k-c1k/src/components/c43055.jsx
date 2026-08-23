import React from 'react';
const LABEL_43055 = 'component_43055';
export function Component43055({ value = 43055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43055, 'data-value': derived.doubled }, children);
}
export default Component43055;
