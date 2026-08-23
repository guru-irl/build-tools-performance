import React from 'react';
const LABEL_4537 = 'component_4537';
export function Component4537({ value = 4537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4537, 'data-value': derived.doubled }, children);
}
export default Component4537;
