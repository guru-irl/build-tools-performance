import React from 'react';
const LABEL_29571 = 'component_29571';
export function Component29571({ value = 29571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29571, 'data-value': derived.doubled }, children);
}
export default Component29571;
