import React from 'react';
const LABEL_14933 = 'component_14933';
export function Component14933({ value = 14933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14933, 'data-value': derived.doubled }, children);
}
export default Component14933;
