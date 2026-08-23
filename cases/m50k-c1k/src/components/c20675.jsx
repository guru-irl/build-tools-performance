import React from 'react';
const LABEL_20675 = 'component_20675';
export function Component20675({ value = 20675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20675, 'data-value': derived.doubled }, children);
}
export default Component20675;
