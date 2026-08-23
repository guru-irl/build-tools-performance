import React from 'react';
const LABEL_32903 = 'component_32903';
export function Component32903({ value = 32903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32903, 'data-value': derived.doubled }, children);
}
export default Component32903;
