import React from 'react';
const LABEL_11412 = 'component_11412';
export function Component11412({ value = 11412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11412, 'data-value': derived.doubled }, children);
}
export default Component11412;
