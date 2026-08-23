import React from 'react';
const LABEL_35797 = 'component_35797';
export function Component35797({ value = 35797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35797, 'data-value': derived.doubled }, children);
}
export default Component35797;
