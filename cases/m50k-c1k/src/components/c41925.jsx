import React from 'react';
const LABEL_41925 = 'component_41925';
export function Component41925({ value = 41925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41925, 'data-value': derived.doubled }, children);
}
export default Component41925;
