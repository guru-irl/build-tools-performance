import React from 'react';
const LABEL_11998 = 'component_11998';
export function Component11998({ value = 11998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11998, 'data-value': derived.doubled }, children);
}
export default Component11998;
