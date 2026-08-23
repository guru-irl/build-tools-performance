import React from 'react';
const LABEL_28412 = 'component_28412';
export function Component28412({ value = 28412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28412, 'data-value': derived.doubled }, children);
}
export default Component28412;
