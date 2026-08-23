import React from 'react';
const LABEL_4147 = 'component_4147';
export function Component4147({ value = 4147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4147, 'data-value': derived.doubled }, children);
}
export default Component4147;
