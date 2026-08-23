import React from 'react';
const LABEL_36373 = 'component_36373';
export function Component36373({ value = 36373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36373, 'data-value': derived.doubled }, children);
}
export default Component36373;
