import React from 'react';
const LABEL_19301 = 'component_19301';
export function Component19301({ value = 19301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19301, 'data-value': derived.doubled }, children);
}
export default Component19301;
