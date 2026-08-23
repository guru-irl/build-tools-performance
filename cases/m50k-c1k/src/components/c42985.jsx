import React from 'react';
const LABEL_42985 = 'component_42985';
export function Component42985({ value = 42985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42985, 'data-value': derived.doubled }, children);
}
export default Component42985;
