import React from 'react';
const LABEL_41896 = 'component_41896';
export function Component41896({ value = 41896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41896, 'data-value': derived.doubled }, children);
}
export default Component41896;
