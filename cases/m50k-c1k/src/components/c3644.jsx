import React from 'react';
const LABEL_3644 = 'component_3644';
export function Component3644({ value = 3644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3644, 'data-value': derived.doubled }, children);
}
export default Component3644;
