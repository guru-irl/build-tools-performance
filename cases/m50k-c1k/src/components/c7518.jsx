import React from 'react';
const LABEL_7518 = 'component_7518';
export function Component7518({ value = 7518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7518, 'data-value': derived.doubled }, children);
}
export default Component7518;
