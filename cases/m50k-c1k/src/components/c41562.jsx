import React from 'react';
const LABEL_41562 = 'component_41562';
export function Component41562({ value = 41562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41562, 'data-value': derived.doubled }, children);
}
export default Component41562;
