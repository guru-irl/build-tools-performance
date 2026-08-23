import React from 'react';
const LABEL_16373 = 'component_16373';
export function Component16373({ value = 16373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16373, 'data-value': derived.doubled }, children);
}
export default Component16373;
