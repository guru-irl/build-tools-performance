import React from 'react';
const LABEL_11440 = 'component_11440';
export function Component11440({ value = 11440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11440, 'data-value': derived.doubled }, children);
}
export default Component11440;
