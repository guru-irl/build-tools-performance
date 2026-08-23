import React from 'react';
const LABEL_19412 = 'component_19412';
export function Component19412({ value = 19412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19412, 'data-value': derived.doubled }, children);
}
export default Component19412;
