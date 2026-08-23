import React from 'react';
const LABEL_4771 = 'component_4771';
export function Component4771({ value = 4771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4771, 'data-value': derived.doubled }, children);
}
export default Component4771;
