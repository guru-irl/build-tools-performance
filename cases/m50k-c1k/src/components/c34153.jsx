import React from 'react';
const LABEL_34153 = 'component_34153';
export function Component34153({ value = 34153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34153, 'data-value': derived.doubled }, children);
}
export default Component34153;
