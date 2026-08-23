import React from 'react';
const LABEL_28429 = 'component_28429';
export function Component28429({ value = 28429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28429, 'data-value': derived.doubled }, children);
}
export default Component28429;
