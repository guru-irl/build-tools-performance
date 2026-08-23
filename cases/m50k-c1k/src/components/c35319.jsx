import React from 'react';
const LABEL_35319 = 'component_35319';
export function Component35319({ value = 35319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35319, 'data-value': derived.doubled }, children);
}
export default Component35319;
