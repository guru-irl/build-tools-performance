import React from 'react';
const LABEL_40412 = 'component_40412';
export function Component40412({ value = 40412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40412, 'data-value': derived.doubled }, children);
}
export default Component40412;
