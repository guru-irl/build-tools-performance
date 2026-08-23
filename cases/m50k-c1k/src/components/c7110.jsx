import React from 'react';
const LABEL_7110 = 'component_7110';
export function Component7110({ value = 7110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7110, 'data-value': derived.doubled }, children);
}
export default Component7110;
