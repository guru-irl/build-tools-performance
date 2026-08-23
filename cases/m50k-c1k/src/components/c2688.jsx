import React from 'react';
const LABEL_2688 = 'component_2688';
export function Component2688({ value = 2688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2688, 'data-value': derived.doubled }, children);
}
export default Component2688;
