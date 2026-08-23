import React from 'react';
const LABEL_30661 = 'component_30661';
export function Component30661({ value = 30661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30661, 'data-value': derived.doubled }, children);
}
export default Component30661;
