import React from 'react';
const LABEL_11110 = 'component_11110';
export function Component11110({ value = 11110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11110, 'data-value': derived.doubled }, children);
}
export default Component11110;
