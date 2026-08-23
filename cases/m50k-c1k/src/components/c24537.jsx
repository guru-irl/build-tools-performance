import React from 'react';
const LABEL_24537 = 'component_24537';
export function Component24537({ value = 24537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24537, 'data-value': derived.doubled }, children);
}
export default Component24537;
