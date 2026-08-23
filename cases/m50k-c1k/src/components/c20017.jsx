import React from 'react';
const LABEL_20017 = 'component_20017';
export function Component20017({ value = 20017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20017, 'data-value': derived.doubled }, children);
}
export default Component20017;
