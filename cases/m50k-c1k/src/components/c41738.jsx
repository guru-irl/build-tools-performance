import React from 'react';
const LABEL_41738 = 'component_41738';
export function Component41738({ value = 41738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41738, 'data-value': derived.doubled }, children);
}
export default Component41738;
