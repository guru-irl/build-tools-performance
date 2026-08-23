import React from 'react';
const LABEL_33458 = 'component_33458';
export function Component33458({ value = 33458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33458, 'data-value': derived.doubled }, children);
}
export default Component33458;
