import React from 'react';
const LABEL_19823 = 'component_19823';
export function Component19823({ value = 19823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19823, 'data-value': derived.doubled }, children);
}
export default Component19823;
