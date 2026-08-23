import React from 'react';
const LABEL_14423 = 'component_14423';
export function Component14423({ value = 14423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14423, 'data-value': derived.doubled }, children);
}
export default Component14423;
