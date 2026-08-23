import React from 'react';
const LABEL_8772 = 'component_8772';
export function Component8772({ value = 8772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8772, 'data-value': derived.doubled }, children);
}
export default Component8772;
