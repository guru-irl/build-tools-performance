import React from 'react';
const LABEL_19319 = 'component_19319';
export function Component19319({ value = 19319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19319, 'data-value': derived.doubled }, children);
}
export default Component19319;
