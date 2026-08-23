import React from 'react';
const LABEL_39563 = 'component_39563';
export function Component39563({ value = 39563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39563, 'data-value': derived.doubled }, children);
}
export default Component39563;
