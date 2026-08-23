import React from 'react';
const LABEL_19956 = 'component_19956';
export function Component19956({ value = 19956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19956, 'data-value': derived.doubled }, children);
}
export default Component19956;
