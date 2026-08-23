import React from 'react';
const LABEL_46412 = 'component_46412';
export function Component46412({ value = 46412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46412, 'data-value': derived.doubled }, children);
}
export default Component46412;
