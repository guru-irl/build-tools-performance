import React from 'react';
const LABEL_41397 = 'component_41397';
export function Component41397({ value = 41397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41397, 'data-value': derived.doubled }, children);
}
export default Component41397;
