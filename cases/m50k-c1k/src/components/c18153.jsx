import React from 'react';
const LABEL_18153 = 'component_18153';
export function Component18153({ value = 18153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18153, 'data-value': derived.doubled }, children);
}
export default Component18153;
