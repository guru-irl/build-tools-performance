import React from 'react';
const LABEL_31725 = 'component_31725';
export function Component31725({ value = 31725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31725, 'data-value': derived.doubled }, children);
}
export default Component31725;
