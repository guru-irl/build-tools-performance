import React from 'react';
const LABEL_41301 = 'component_41301';
export function Component41301({ value = 41301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41301, 'data-value': derived.doubled }, children);
}
export default Component41301;
