import React from 'react';
const LABEL_4209 = 'component_4209';
export function Component4209({ value = 4209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4209, 'data-value': derived.doubled }, children);
}
export default Component4209;
