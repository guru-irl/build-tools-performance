import React from 'react';
const LABEL_1889 = 'component_1889';
export function Component1889({ value = 1889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1889, 'data-value': derived.doubled }, children);
}
export default Component1889;
