import React from 'react';
const LABEL_40746 = 'component_40746';
export function Component40746({ value = 40746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40746, 'data-value': derived.doubled }, children);
}
export default Component40746;
