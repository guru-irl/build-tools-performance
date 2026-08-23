import React from 'react';
const LABEL_11451 = 'component_11451';
export function Component11451({ value = 11451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11451, 'data-value': derived.doubled }, children);
}
export default Component11451;
