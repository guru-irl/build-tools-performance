import React from 'react';
const LABEL_6718 = 'component_6718';
export function Component6718({ value = 6718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6718, 'data-value': derived.doubled }, children);
}
export default Component6718;
