import React from 'react';
const LABEL_9281 = 'component_9281';
export function Component9281({ value = 9281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9281, 'data-value': derived.doubled }, children);
}
export default Component9281;
