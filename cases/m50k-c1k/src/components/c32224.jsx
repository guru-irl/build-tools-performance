import React from 'react';
const LABEL_32224 = 'component_32224';
export function Component32224({ value = 32224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32224, 'data-value': derived.doubled }, children);
}
export default Component32224;
