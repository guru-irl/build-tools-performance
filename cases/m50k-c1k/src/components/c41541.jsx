import React from 'react';
const LABEL_41541 = 'component_41541';
export function Component41541({ value = 41541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41541, 'data-value': derived.doubled }, children);
}
export default Component41541;
