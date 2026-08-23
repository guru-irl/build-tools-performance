import React from 'react';
const LABEL_42925 = 'component_42925';
export function Component42925({ value = 42925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42925, 'data-value': derived.doubled }, children);
}
export default Component42925;
