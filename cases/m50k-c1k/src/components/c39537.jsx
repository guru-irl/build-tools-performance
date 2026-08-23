import React from 'react';
const LABEL_39537 = 'component_39537';
export function Component39537({ value = 39537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39537, 'data-value': derived.doubled }, children);
}
export default Component39537;
