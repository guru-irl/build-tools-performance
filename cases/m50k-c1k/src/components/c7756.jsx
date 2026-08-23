import React from 'react';
const LABEL_7756 = 'component_7756';
export function Component7756({ value = 7756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7756, 'data-value': derived.doubled }, children);
}
export default Component7756;
