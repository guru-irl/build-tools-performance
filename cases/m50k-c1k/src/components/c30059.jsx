import React from 'react';
const LABEL_30059 = 'component_30059';
export function Component30059({ value = 30059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30059, 'data-value': derived.doubled }, children);
}
export default Component30059;
