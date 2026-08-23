import React from 'react';
const LABEL_13412 = 'component_13412';
export function Component13412({ value = 13412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13412, 'data-value': derived.doubled }, children);
}
export default Component13412;
