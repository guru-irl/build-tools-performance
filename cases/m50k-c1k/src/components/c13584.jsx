import React from 'react';
const LABEL_13584 = 'component_13584';
export function Component13584({ value = 13584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13584, 'data-value': derived.doubled }, children);
}
export default Component13584;
