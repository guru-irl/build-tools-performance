import React from 'react';
const LABEL_18865 = 'component_18865';
export function Component18865({ value = 18865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18865, 'data-value': derived.doubled }, children);
}
export default Component18865;
