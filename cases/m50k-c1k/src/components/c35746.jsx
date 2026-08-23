import React from 'react';
const LABEL_35746 = 'component_35746';
export function Component35746({ value = 35746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35746, 'data-value': derived.doubled }, children);
}
export default Component35746;
