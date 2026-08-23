import React from 'react';
const LABEL_37797 = 'component_37797';
export function Component37797({ value = 37797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37797, 'data-value': derived.doubled }, children);
}
export default Component37797;
