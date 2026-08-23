import React from 'react';
const LABEL_20115 = 'component_20115';
export function Component20115({ value = 20115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20115, 'data-value': derived.doubled }, children);
}
export default Component20115;
