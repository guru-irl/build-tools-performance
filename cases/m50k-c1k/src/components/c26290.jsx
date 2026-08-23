import React from 'react';
const LABEL_26290 = 'component_26290';
export function Component26290({ value = 26290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26290, 'data-value': derived.doubled }, children);
}
export default Component26290;
