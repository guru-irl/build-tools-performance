import React from 'react';
const LABEL_37829 = 'component_37829';
export function Component37829({ value = 37829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37829, 'data-value': derived.doubled }, children);
}
export default Component37829;
