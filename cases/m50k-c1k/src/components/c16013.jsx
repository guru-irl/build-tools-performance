import React from 'react';
const LABEL_16013 = 'component_16013';
export function Component16013({ value = 16013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16013, 'data-value': derived.doubled }, children);
}
export default Component16013;
