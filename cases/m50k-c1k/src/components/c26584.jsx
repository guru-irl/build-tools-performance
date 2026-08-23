import React from 'react';
const LABEL_26584 = 'component_26584';
export function Component26584({ value = 26584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26584, 'data-value': derived.doubled }, children);
}
export default Component26584;
