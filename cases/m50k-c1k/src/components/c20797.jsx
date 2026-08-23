import React from 'react';
const LABEL_20797 = 'component_20797';
export function Component20797({ value = 20797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20797, 'data-value': derived.doubled }, children);
}
export default Component20797;
