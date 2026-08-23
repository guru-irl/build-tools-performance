import React from 'react';
const LABEL_18033 = 'component_18033';
export function Component18033({ value = 18033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18033, 'data-value': derived.doubled }, children);
}
export default Component18033;
