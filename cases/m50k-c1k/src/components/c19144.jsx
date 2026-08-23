import React from 'react';
const LABEL_19144 = 'component_19144';
export function Component19144({ value = 19144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19144, 'data-value': derived.doubled }, children);
}
export default Component19144;
