import React from 'react';
const LABEL_19177 = 'component_19177';
export function Component19177({ value = 19177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19177, 'data-value': derived.doubled }, children);
}
export default Component19177;
