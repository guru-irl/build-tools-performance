import React from 'react';
const LABEL_4798 = 'component_4798';
export function Component4798({ value = 4798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4798, 'data-value': derived.doubled }, children);
}
export default Component4798;
