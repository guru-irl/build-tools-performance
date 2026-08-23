import React from 'react';
const LABEL_10686 = 'component_10686';
export function Component10686({ value = 10686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10686, 'data-value': derived.doubled }, children);
}
export default Component10686;
