import React from 'react';
const LABEL_11620 = 'component_11620';
export function Component11620({ value = 11620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11620, 'data-value': derived.doubled }, children);
}
export default Component11620;
