import React from 'react';
const LABEL_42204 = 'component_42204';
export function Component42204({ value = 42204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42204, 'data-value': derived.doubled }, children);
}
export default Component42204;
