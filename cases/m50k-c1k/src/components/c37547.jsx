import React from 'react';
const LABEL_37547 = 'component_37547';
export function Component37547({ value = 37547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37547, 'data-value': derived.doubled }, children);
}
export default Component37547;
