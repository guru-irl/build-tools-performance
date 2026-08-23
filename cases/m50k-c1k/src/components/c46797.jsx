import React from 'react';
const LABEL_46797 = 'component_46797';
export function Component46797({ value = 46797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46797, 'data-value': derived.doubled }, children);
}
export default Component46797;
