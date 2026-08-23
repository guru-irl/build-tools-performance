import React from 'react';
const LABEL_29618 = 'component_29618';
export function Component29618({ value = 29618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29618, 'data-value': derived.doubled }, children);
}
export default Component29618;
