import React from 'react';
const LABEL_14480 = 'component_14480';
export function Component14480({ value = 14480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14480, 'data-value': derived.doubled }, children);
}
export default Component14480;
