import React from 'react';
const LABEL_5302 = 'component_5302';
export function Component5302({ value = 5302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5302, 'data-value': derived.doubled }, children);
}
export default Component5302;
