import React from 'react';
const LABEL_35153 = 'component_35153';
export function Component35153({ value = 35153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35153, 'data-value': derived.doubled }, children);
}
export default Component35153;
