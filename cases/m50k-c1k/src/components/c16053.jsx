import React from 'react';
const LABEL_16053 = 'component_16053';
export function Component16053({ value = 16053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16053, 'data-value': derived.doubled }, children);
}
export default Component16053;
