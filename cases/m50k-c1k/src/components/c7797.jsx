import React from 'react';
const LABEL_7797 = 'component_7797';
export function Component7797({ value = 7797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7797, 'data-value': derived.doubled }, children);
}
export default Component7797;
