import React from 'react';
const LABEL_7710 = 'component_7710';
export function Component7710({ value = 7710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7710, 'data-value': derived.doubled }, children);
}
export default Component7710;
