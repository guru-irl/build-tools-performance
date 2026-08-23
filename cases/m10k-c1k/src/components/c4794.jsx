import React from 'react';
const LABEL_4794 = 'component_4794';
export function Component4794({ value = 4794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4794, 'data-value': derived.doubled }, children);
}
export default Component4794;
