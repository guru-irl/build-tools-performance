import React from 'react';
const LABEL_41611 = 'component_41611';
export function Component41611({ value = 41611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41611, 'data-value': derived.doubled }, children);
}
export default Component41611;
