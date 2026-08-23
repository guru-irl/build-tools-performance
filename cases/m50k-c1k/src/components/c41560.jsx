import React from 'react';
const LABEL_41560 = 'component_41560';
export function Component41560({ value = 41560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41560, 'data-value': derived.doubled }, children);
}
export default Component41560;
