import React from 'react';
const LABEL_26854 = 'component_26854';
export function Component26854({ value = 26854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26854, 'data-value': derived.doubled }, children);
}
export default Component26854;
