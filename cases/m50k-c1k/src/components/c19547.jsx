import React from 'react';
const LABEL_19547 = 'component_19547';
export function Component19547({ value = 19547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19547, 'data-value': derived.doubled }, children);
}
export default Component19547;
