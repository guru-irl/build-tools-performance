import React from 'react';
const LABEL_33180 = 'component_33180';
export function Component33180({ value = 33180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33180, 'data-value': derived.doubled }, children);
}
export default Component33180;
