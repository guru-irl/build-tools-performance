import React from 'react';
const LABEL_28143 = 'component_28143';
export function Component28143({ value = 28143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28143, 'data-value': derived.doubled }, children);
}
export default Component28143;
