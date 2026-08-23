import React from 'react';
const LABEL_25397 = 'component_25397';
export function Component25397({ value = 25397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25397, 'data-value': derived.doubled }, children);
}
export default Component25397;
