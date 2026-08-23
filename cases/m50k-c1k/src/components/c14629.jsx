import React from 'react';
const LABEL_14629 = 'component_14629';
export function Component14629({ value = 14629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14629, 'data-value': derived.doubled }, children);
}
export default Component14629;
