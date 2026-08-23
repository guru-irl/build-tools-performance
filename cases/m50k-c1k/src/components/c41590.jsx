import React from 'react';
const LABEL_41590 = 'component_41590';
export function Component41590({ value = 41590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41590, 'data-value': derived.doubled }, children);
}
export default Component41590;
