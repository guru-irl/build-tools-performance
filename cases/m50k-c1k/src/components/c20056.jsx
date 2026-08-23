import React from 'react';
const LABEL_20056 = 'component_20056';
export function Component20056({ value = 20056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20056, 'data-value': derived.doubled }, children);
}
export default Component20056;
