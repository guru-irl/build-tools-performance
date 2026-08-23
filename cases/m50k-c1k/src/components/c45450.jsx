import React from 'react';
const LABEL_45450 = 'component_45450';
export function Component45450({ value = 45450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45450, 'data-value': derived.doubled }, children);
}
export default Component45450;
