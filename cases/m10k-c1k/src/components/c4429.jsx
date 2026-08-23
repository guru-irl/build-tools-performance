import React from 'react';
const LABEL_4429 = 'component_4429';
export function Component4429({ value = 4429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4429, 'data-value': derived.doubled }, children);
}
export default Component4429;
