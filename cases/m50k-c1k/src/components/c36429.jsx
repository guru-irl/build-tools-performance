import React from 'react';
const LABEL_36429 = 'component_36429';
export function Component36429({ value = 36429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36429, 'data-value': derived.doubled }, children);
}
export default Component36429;
