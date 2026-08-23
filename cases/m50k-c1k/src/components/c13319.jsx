import React from 'react';
const LABEL_13319 = 'component_13319';
export function Component13319({ value = 13319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13319, 'data-value': derived.doubled }, children);
}
export default Component13319;
