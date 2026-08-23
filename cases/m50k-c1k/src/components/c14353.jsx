import React from 'react';
const LABEL_14353 = 'component_14353';
export function Component14353({ value = 14353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14353, 'data-value': derived.doubled }, children);
}
export default Component14353;
