import React from 'react';
const LABEL_38412 = 'component_38412';
export function Component38412({ value = 38412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38412, 'data-value': derived.doubled }, children);
}
export default Component38412;
