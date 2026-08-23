import React from 'react';
const LABEL_15547 = 'component_15547';
export function Component15547({ value = 15547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15547, 'data-value': derived.doubled }, children);
}
export default Component15547;
