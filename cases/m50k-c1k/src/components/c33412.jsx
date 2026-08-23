import React from 'react';
const LABEL_33412 = 'component_33412';
export function Component33412({ value = 33412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33412, 'data-value': derived.doubled }, children);
}
export default Component33412;
