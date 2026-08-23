import React from 'react';
const LABEL_36800 = 'component_36800';
export function Component36800({ value = 36800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36800, 'data-value': derived.doubled }, children);
}
export default Component36800;
