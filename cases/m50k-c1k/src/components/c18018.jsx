import React from 'react';
const LABEL_18018 = 'component_18018';
export function Component18018({ value = 18018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18018, 'data-value': derived.doubled }, children);
}
export default Component18018;
