import React from 'react';
const LABEL_37668 = 'component_37668';
export function Component37668({ value = 37668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37668, 'data-value': derived.doubled }, children);
}
export default Component37668;
