import React from 'react';
const LABEL_8429 = 'component_8429';
export function Component8429({ value = 8429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8429, 'data-value': derived.doubled }, children);
}
export default Component8429;
