import React from 'react';
const LABEL_7676 = 'component_7676';
export function Component7676({ value = 7676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7676, 'data-value': derived.doubled }, children);
}
export default Component7676;
