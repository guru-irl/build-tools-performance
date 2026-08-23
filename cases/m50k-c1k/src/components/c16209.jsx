import React from 'react';
const LABEL_16209 = 'component_16209';
export function Component16209({ value = 16209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16209, 'data-value': derived.doubled }, children);
}
export default Component16209;
