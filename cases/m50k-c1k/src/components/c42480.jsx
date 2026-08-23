import React from 'react';
const LABEL_42480 = 'component_42480';
export function Component42480({ value = 42480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42480, 'data-value': derived.doubled }, children);
}
export default Component42480;
