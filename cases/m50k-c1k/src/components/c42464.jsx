import React from 'react';
const LABEL_42464 = 'component_42464';
export function Component42464({ value = 42464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42464, 'data-value': derived.doubled }, children);
}
export default Component42464;
