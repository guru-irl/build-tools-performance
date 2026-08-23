import React from 'react';
const LABEL_7634 = 'component_7634';
export function Component7634({ value = 7634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7634, 'data-value': derived.doubled }, children);
}
export default Component7634;
