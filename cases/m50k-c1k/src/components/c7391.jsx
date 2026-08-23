import React from 'react';
const LABEL_7391 = 'component_7391';
export function Component7391({ value = 7391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7391, 'data-value': derived.doubled }, children);
}
export default Component7391;
