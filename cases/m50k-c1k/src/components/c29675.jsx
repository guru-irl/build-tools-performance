import React from 'react';
const LABEL_29675 = 'component_29675';
export function Component29675({ value = 29675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29675, 'data-value': derived.doubled }, children);
}
export default Component29675;
