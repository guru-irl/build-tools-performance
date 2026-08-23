import React from 'react';
const LABEL_30587 = 'component_30587';
export function Component30587({ value = 30587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30587, 'data-value': derived.doubled }, children);
}
export default Component30587;
