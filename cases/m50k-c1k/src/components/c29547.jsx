import React from 'react';
const LABEL_29547 = 'component_29547';
export function Component29547({ value = 29547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29547, 'data-value': derived.doubled }, children);
}
export default Component29547;
