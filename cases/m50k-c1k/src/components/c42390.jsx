import React from 'react';
const LABEL_42390 = 'component_42390';
export function Component42390({ value = 42390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42390, 'data-value': derived.doubled }, children);
}
export default Component42390;
