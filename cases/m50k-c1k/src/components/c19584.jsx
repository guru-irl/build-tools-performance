import React from 'react';
const LABEL_19584 = 'component_19584';
export function Component19584({ value = 19584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19584, 'data-value': derived.doubled }, children);
}
export default Component19584;
