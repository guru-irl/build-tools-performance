import React from 'react';
const LABEL_29757 = 'component_29757';
export function Component29757({ value = 29757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29757, 'data-value': derived.doubled }, children);
}
export default Component29757;
