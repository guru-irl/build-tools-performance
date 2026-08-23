import React from 'react';
const LABEL_41898 = 'component_41898';
export function Component41898({ value = 41898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41898, 'data-value': derived.doubled }, children);
}
export default Component41898;
