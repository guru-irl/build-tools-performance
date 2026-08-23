import React from 'react';
const LABEL_41741 = 'component_41741';
export function Component41741({ value = 41741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41741, 'data-value': derived.doubled }, children);
}
export default Component41741;
