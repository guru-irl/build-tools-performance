import React from 'react';
const LABEL_43397 = 'component_43397';
export function Component43397({ value = 43397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43397, 'data-value': derived.doubled }, children);
}
export default Component43397;
