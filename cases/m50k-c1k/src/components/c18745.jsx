import React from 'react';
const LABEL_18745 = 'component_18745';
export function Component18745({ value = 18745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18745, 'data-value': derived.doubled }, children);
}
export default Component18745;
