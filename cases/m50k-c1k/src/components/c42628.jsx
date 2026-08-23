import React from 'react';
const LABEL_42628 = 'component_42628';
export function Component42628({ value = 42628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42628, 'data-value': derived.doubled }, children);
}
export default Component42628;
