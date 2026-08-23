import React from 'react';
const LABEL_6110 = 'component_6110';
export function Component6110({ value = 6110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6110, 'data-value': derived.doubled }, children);
}
export default Component6110;
