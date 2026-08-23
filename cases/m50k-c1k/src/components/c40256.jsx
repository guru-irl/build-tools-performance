import React from 'react';
const LABEL_40256 = 'component_40256';
export function Component40256({ value = 40256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40256, 'data-value': derived.doubled }, children);
}
export default Component40256;
