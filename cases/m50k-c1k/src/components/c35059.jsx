import React from 'react';
const LABEL_35059 = 'component_35059';
export function Component35059({ value = 35059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35059, 'data-value': derived.doubled }, children);
}
export default Component35059;
