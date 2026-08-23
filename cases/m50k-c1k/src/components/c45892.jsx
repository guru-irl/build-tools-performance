import React from 'react';
const LABEL_45892 = 'component_45892';
export function Component45892({ value = 45892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45892, 'data-value': derived.doubled }, children);
}
export default Component45892;
