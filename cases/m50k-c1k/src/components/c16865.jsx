import React from 'react';
const LABEL_16865 = 'component_16865';
export function Component16865({ value = 16865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16865, 'data-value': derived.doubled }, children);
}
export default Component16865;
