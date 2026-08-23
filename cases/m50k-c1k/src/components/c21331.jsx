import React from 'react';
const LABEL_21331 = 'component_21331';
export function Component21331({ value = 21331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21331, 'data-value': derived.doubled }, children);
}
export default Component21331;
