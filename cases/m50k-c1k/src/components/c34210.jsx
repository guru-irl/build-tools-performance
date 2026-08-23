import React from 'react';
const LABEL_34210 = 'component_34210';
export function Component34210({ value = 34210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34210, 'data-value': derived.doubled }, children);
}
export default Component34210;
