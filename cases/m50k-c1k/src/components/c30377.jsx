import React from 'react';
const LABEL_30377 = 'component_30377';
export function Component30377({ value = 30377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30377, 'data-value': derived.doubled }, children);
}
export default Component30377;
