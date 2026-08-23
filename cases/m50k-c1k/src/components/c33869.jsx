import React from 'react';
const LABEL_33869 = 'component_33869';
export function Component33869({ value = 33869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33869, 'data-value': derived.doubled }, children);
}
export default Component33869;
