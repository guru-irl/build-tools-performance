import React from 'react';
const LABEL_20225 = 'component_20225';
export function Component20225({ value = 20225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20225, 'data-value': derived.doubled }, children);
}
export default Component20225;
