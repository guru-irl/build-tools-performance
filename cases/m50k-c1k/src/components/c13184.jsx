import React from 'react';
const LABEL_13184 = 'component_13184';
export function Component13184({ value = 13184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13184, 'data-value': derived.doubled }, children);
}
export default Component13184;
