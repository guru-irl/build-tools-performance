import React from 'react';
const LABEL_20795 = 'component_20795';
export function Component20795({ value = 20795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20795, 'data-value': derived.doubled }, children);
}
export default Component20795;
