import React from 'react';
const LABEL_16410 = 'component_16410';
export function Component16410({ value = 16410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16410, 'data-value': derived.doubled }, children);
}
export default Component16410;
