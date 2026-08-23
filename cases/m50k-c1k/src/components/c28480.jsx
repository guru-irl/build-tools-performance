import React from 'react';
const LABEL_28480 = 'component_28480';
export function Component28480({ value = 28480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28480, 'data-value': derived.doubled }, children);
}
export default Component28480;
