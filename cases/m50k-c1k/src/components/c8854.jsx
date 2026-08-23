import React from 'react';
const LABEL_8854 = 'component_8854';
export function Component8854({ value = 8854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8854, 'data-value': derived.doubled }, children);
}
export default Component8854;
