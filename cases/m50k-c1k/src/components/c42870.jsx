import React from 'react';
const LABEL_42870 = 'component_42870';
export function Component42870({ value = 42870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42870, 'data-value': derived.doubled }, children);
}
export default Component42870;
