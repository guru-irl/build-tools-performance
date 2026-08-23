import React from 'react';
const LABEL_7925 = 'component_7925';
export function Component7925({ value = 7925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7925, 'data-value': derived.doubled }, children);
}
export default Component7925;
