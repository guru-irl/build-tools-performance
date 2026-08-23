import React from 'react';
const LABEL_5547 = 'component_5547';
export function Component5547({ value = 5547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5547, 'data-value': derived.doubled }, children);
}
export default Component5547;
