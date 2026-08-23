import React from 'react';
const LABEL_10546 = 'component_10546';
export function Component10546({ value = 10546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10546, 'data-value': derived.doubled }, children);
}
export default Component10546;
