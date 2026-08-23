import React from 'react';
const LABEL_36153 = 'component_36153';
export function Component36153({ value = 36153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36153, 'data-value': derived.doubled }, children);
}
export default Component36153;
