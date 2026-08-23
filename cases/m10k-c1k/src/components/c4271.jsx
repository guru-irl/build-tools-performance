import React from 'react';
const LABEL_4271 = 'component_4271';
export function Component4271({ value = 4271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4271, 'data-value': derived.doubled }, children);
}
export default Component4271;
