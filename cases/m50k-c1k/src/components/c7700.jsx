import React from 'react';
const LABEL_7700 = 'component_7700';
export function Component7700({ value = 7700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7700, 'data-value': derived.doubled }, children);
}
export default Component7700;
