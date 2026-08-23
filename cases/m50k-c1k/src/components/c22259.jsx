import React from 'react';
const LABEL_22259 = 'component_22259';
export function Component22259({ value = 22259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22259, 'data-value': derived.doubled }, children);
}
export default Component22259;
