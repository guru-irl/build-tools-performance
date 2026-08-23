import React from 'react';
const LABEL_42059 = 'component_42059';
export function Component42059({ value = 42059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42059, 'data-value': derived.doubled }, children);
}
export default Component42059;
