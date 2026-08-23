import React from 'react';
const LABEL_13746 = 'component_13746';
export function Component13746({ value = 13746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13746, 'data-value': derived.doubled }, children);
}
export default Component13746;
