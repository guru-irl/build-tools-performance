import React from 'react';
const LABEL_12386 = 'component_12386';
export function Component12386({ value = 12386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12386, 'data-value': derived.doubled }, children);
}
export default Component12386;
