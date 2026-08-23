import React from 'react';
const LABEL_20319 = 'component_20319';
export function Component20319({ value = 20319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20319, 'data-value': derived.doubled }, children);
}
export default Component20319;
