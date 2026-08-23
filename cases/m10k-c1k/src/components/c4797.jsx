import React from 'react';
const LABEL_4797 = 'component_4797';
export function Component4797({ value = 4797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4797, 'data-value': derived.doubled }, children);
}
export default Component4797;
