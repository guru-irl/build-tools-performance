import React from 'react';
const LABEL_20881 = 'component_20881';
export function Component20881({ value = 20881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20881, 'data-value': derived.doubled }, children);
}
export default Component20881;
