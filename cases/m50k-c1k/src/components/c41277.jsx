import React from 'react';
const LABEL_41277 = 'component_41277';
export function Component41277({ value = 41277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41277, 'data-value': derived.doubled }, children);
}
export default Component41277;
