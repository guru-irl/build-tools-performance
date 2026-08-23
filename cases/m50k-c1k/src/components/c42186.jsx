import React from 'react';
const LABEL_42186 = 'component_42186';
export function Component42186({ value = 42186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42186, 'data-value': derived.doubled }, children);
}
export default Component42186;
