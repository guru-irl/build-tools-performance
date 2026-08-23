import React from 'react';
const LABEL_19885 = 'component_19885';
export function Component19885({ value = 19885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19885, 'data-value': derived.doubled }, children);
}
export default Component19885;
