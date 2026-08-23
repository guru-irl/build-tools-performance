import React from 'react';
const LABEL_19033 = 'component_19033';
export function Component19033({ value = 19033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19033, 'data-value': derived.doubled }, children);
}
export default Component19033;
