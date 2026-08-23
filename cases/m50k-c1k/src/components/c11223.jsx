import React from 'react';
const LABEL_11223 = 'component_11223';
export function Component11223({ value = 11223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11223, 'data-value': derived.doubled }, children);
}
export default Component11223;
