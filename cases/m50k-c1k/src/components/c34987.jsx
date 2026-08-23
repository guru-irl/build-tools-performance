import React from 'react';
const LABEL_34987 = 'component_34987';
export function Component34987({ value = 34987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34987, 'data-value': derived.doubled }, children);
}
export default Component34987;
