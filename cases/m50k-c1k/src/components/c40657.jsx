import React from 'react';
const LABEL_40657 = 'component_40657';
export function Component40657({ value = 40657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40657, 'data-value': derived.doubled }, children);
}
export default Component40657;
