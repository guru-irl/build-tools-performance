import React from 'react';
const LABEL_20588 = 'component_20588';
export function Component20588({ value = 20588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20588, 'data-value': derived.doubled }, children);
}
export default Component20588;
