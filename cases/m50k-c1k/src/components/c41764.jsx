import React from 'react';
const LABEL_41764 = 'component_41764';
export function Component41764({ value = 41764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41764, 'data-value': derived.doubled }, children);
}
export default Component41764;
