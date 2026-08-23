import React from 'react';
const LABEL_33960 = 'component_33960';
export function Component33960({ value = 33960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33960, 'data-value': derived.doubled }, children);
}
export default Component33960;
