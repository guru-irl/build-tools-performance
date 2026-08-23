import React from 'react';
const LABEL_20451 = 'component_20451';
export function Component20451({ value = 20451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20451, 'data-value': derived.doubled }, children);
}
export default Component20451;
