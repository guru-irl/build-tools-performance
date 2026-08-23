import React from 'react';
const LABEL_7078 = 'component_7078';
export function Component7078({ value = 7078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7078, 'data-value': derived.doubled }, children);
}
export default Component7078;
