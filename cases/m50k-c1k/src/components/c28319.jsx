import React from 'react';
const LABEL_28319 = 'component_28319';
export function Component28319({ value = 28319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28319, 'data-value': derived.doubled }, children);
}
export default Component28319;
