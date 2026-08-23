import React from 'react';
const LABEL_42912 = 'component_42912';
export function Component42912({ value = 42912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42912, 'data-value': derived.doubled }, children);
}
export default Component42912;
