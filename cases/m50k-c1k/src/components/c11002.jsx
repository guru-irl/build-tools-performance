import React from 'react';
const LABEL_11002 = 'component_11002';
export function Component11002({ value = 11002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11002, 'data-value': derived.doubled }, children);
}
export default Component11002;
