import React from 'react';
const LABEL_10412 = 'component_10412';
export function Component10412({ value = 10412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10412, 'data-value': derived.doubled }, children);
}
export default Component10412;
