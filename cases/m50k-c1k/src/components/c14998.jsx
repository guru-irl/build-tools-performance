import React from 'react';
const LABEL_14998 = 'component_14998';
export function Component14998({ value = 14998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14998, 'data-value': derived.doubled }, children);
}
export default Component14998;
