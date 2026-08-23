import React from 'react';
const LABEL_45563 = 'component_45563';
export function Component45563({ value = 45563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45563, 'data-value': derived.doubled }, children);
}
export default Component45563;
