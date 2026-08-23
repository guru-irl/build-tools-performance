import React from 'react';
const LABEL_24451 = 'component_24451';
export function Component24451({ value = 24451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24451, 'data-value': derived.doubled }, children);
}
export default Component24451;
