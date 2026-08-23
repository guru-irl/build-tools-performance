import React from 'react';
const LABEL_31196 = 'component_31196';
export function Component31196({ value = 31196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31196, 'data-value': derived.doubled }, children);
}
export default Component31196;
