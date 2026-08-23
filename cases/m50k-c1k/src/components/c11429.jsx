import React from 'react';
const LABEL_11429 = 'component_11429';
export function Component11429({ value = 11429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11429, 'data-value': derived.doubled }, children);
}
export default Component11429;
