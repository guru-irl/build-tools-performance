import React from 'react';
const LABEL_14406 = 'component_14406';
export function Component14406({ value = 14406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14406, 'data-value': derived.doubled }, children);
}
export default Component14406;
