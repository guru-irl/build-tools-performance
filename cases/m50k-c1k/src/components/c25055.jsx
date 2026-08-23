import React from 'react';
const LABEL_25055 = 'component_25055';
export function Component25055({ value = 25055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25055, 'data-value': derived.doubled }, children);
}
export default Component25055;
