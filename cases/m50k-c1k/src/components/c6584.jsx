import React from 'react';
const LABEL_6584 = 'component_6584';
export function Component6584({ value = 6584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6584, 'data-value': derived.doubled }, children);
}
export default Component6584;
