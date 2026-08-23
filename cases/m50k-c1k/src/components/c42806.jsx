import React from 'react';
const LABEL_42806 = 'component_42806';
export function Component42806({ value = 42806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42806, 'data-value': derived.doubled }, children);
}
export default Component42806;
