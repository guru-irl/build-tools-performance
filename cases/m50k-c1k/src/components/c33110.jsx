import React from 'react';
const LABEL_33110 = 'component_33110';
export function Component33110({ value = 33110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33110, 'data-value': derived.doubled }, children);
}
export default Component33110;
