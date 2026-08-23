import React from 'react';
const LABEL_11618 = 'component_11618';
export function Component11618({ value = 11618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11618, 'data-value': derived.doubled }, children);
}
export default Component11618;
