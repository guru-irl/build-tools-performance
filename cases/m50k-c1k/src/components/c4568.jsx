import React from 'react';
const LABEL_4568 = 'component_4568';
export function Component4568({ value = 4568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4568, 'data-value': derived.doubled }, children);
}
export default Component4568;
