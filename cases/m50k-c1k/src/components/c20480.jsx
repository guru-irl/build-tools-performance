import React from 'react';
const LABEL_20480 = 'component_20480';
export function Component20480({ value = 20480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20480, 'data-value': derived.doubled }, children);
}
export default Component20480;
