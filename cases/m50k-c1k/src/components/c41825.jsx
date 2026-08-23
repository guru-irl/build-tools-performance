import React from 'react';
const LABEL_41825 = 'component_41825';
export function Component41825({ value = 41825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41825, 'data-value': derived.doubled }, children);
}
export default Component41825;
