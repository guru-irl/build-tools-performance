import React from 'react';
const LABEL_39319 = 'component_39319';
export function Component39319({ value = 39319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39319, 'data-value': derived.doubled }, children);
}
export default Component39319;
