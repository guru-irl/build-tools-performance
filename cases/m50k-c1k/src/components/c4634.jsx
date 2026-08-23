import React from 'react';
const LABEL_4634 = 'component_4634';
export function Component4634({ value = 4634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4634, 'data-value': derived.doubled }, children);
}
export default Component4634;
