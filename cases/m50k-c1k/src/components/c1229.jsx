import React from 'react';
const LABEL_1229 = 'component_1229';
export function Component1229({ value = 1229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1229, 'data-value': derived.doubled }, children);
}
export default Component1229;
