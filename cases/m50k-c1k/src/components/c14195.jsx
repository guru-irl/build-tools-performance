import React from 'react';
const LABEL_14195 = 'component_14195';
export function Component14195({ value = 14195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14195, 'data-value': derived.doubled }, children);
}
export default Component14195;
