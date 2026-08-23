import React from 'react';
const LABEL_15282 = 'component_15282';
export function Component15282({ value = 15282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15282, 'data-value': derived.doubled }, children);
}
export default Component15282;
