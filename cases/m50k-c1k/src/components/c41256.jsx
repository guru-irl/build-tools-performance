import React from 'react';
const LABEL_41256 = 'component_41256';
export function Component41256({ value = 41256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41256, 'data-value': derived.doubled }, children);
}
export default Component41256;
