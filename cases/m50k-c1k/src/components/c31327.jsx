import React from 'react';
const LABEL_31327 = 'component_31327';
export function Component31327({ value = 31327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31327, 'data-value': derived.doubled }, children);
}
export default Component31327;
