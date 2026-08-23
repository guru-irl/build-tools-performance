import React from 'react';
const LABEL_40870 = 'component_40870';
export function Component40870({ value = 40870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40870, 'data-value': derived.doubled }, children);
}
export default Component40870;
