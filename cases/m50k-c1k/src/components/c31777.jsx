import React from 'react';
const LABEL_31777 = 'component_31777';
export function Component31777({ value = 31777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31777, 'data-value': derived.doubled }, children);
}
export default Component31777;
