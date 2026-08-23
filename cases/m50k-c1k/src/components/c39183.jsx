import React from 'react';
const LABEL_39183 = 'component_39183';
export function Component39183({ value = 39183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39183, 'data-value': derived.doubled }, children);
}
export default Component39183;
