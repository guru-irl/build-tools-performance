import React from 'react';
const LABEL_11169 = 'component_11169';
export function Component11169({ value = 11169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11169, 'data-value': derived.doubled }, children);
}
export default Component11169;
