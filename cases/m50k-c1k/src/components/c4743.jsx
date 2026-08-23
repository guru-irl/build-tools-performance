import React from 'react';
const LABEL_4743 = 'component_4743';
export function Component4743({ value = 4743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4743, 'data-value': derived.doubled }, children);
}
export default Component4743;
