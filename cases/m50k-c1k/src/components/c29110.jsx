import React from 'react';
const LABEL_29110 = 'component_29110';
export function Component29110({ value = 29110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29110, 'data-value': derived.doubled }, children);
}
export default Component29110;
