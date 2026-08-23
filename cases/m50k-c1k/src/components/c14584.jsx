import React from 'react';
const LABEL_14584 = 'component_14584';
export function Component14584({ value = 14584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14584, 'data-value': derived.doubled }, children);
}
export default Component14584;
