import React from 'react';
const LABEL_2131 = 'component_2131';
export function Component2131({ value = 2131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2131, 'data-value': derived.doubled }, children);
}
export default Component2131;
