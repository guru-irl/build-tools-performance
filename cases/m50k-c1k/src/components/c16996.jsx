import React from 'react';
const LABEL_16996 = 'component_16996';
export function Component16996({ value = 16996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16996, 'data-value': derived.doubled }, children);
}
export default Component16996;
