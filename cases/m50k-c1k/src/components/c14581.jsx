import React from 'react';
const LABEL_14581 = 'component_14581';
export function Component14581({ value = 14581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14581, 'data-value': derived.doubled }, children);
}
export default Component14581;
