import React from 'react';
const LABEL_29225 = 'component_29225';
export function Component29225({ value = 29225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29225, 'data-value': derived.doubled }, children);
}
export default Component29225;
