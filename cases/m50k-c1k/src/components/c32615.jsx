import React from 'react';
const LABEL_32615 = 'component_32615';
export function Component32615({ value = 32615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32615, 'data-value': derived.doubled }, children);
}
export default Component32615;
