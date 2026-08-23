import React from 'react';
const LABEL_42518 = 'component_42518';
export function Component42518({ value = 42518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42518, 'data-value': derived.doubled }, children);
}
export default Component42518;
