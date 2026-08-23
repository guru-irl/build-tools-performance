import React from 'react';
const LABEL_39205 = 'component_39205';
export function Component39205({ value = 39205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39205, 'data-value': derived.doubled }, children);
}
export default Component39205;
