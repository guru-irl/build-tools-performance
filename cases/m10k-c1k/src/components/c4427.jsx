import React from 'react';
const LABEL_4427 = 'component_4427';
export function Component4427({ value = 4427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4427, 'data-value': derived.doubled }, children);
}
export default Component4427;
