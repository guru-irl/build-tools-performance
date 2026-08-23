import React from 'react';
const LABEL_42860 = 'component_42860';
export function Component42860({ value = 42860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42860, 'data-value': derived.doubled }, children);
}
export default Component42860;
