import React from 'react';
const LABEL_41950 = 'component_41950';
export function Component41950({ value = 41950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41950, 'data-value': derived.doubled }, children);
}
export default Component41950;
