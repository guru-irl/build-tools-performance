import React from 'react';
const LABEL_4746 = 'component_4746';
export function Component4746({ value = 4746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4746, 'data-value': derived.doubled }, children);
}
export default Component4746;
