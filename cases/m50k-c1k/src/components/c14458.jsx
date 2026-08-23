import React from 'react';
const LABEL_14458 = 'component_14458';
export function Component14458({ value = 14458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14458, 'data-value': derived.doubled }, children);
}
export default Component14458;
