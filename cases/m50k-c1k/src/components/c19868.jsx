import React from 'react';
const LABEL_19868 = 'component_19868';
export function Component19868({ value = 19868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19868, 'data-value': derived.doubled }, children);
}
export default Component19868;
