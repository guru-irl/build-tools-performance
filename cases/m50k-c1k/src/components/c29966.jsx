import React from 'react';
const LABEL_29966 = 'component_29966';
export function Component29966({ value = 29966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29966, 'data-value': derived.doubled }, children);
}
export default Component29966;
