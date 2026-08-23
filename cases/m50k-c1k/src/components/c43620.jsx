import React from 'react';
const LABEL_43620 = 'component_43620';
export function Component43620({ value = 43620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43620, 'data-value': derived.doubled }, children);
}
export default Component43620;
