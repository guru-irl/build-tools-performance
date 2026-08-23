import React from 'react';
const LABEL_44898 = 'component_44898';
export function Component44898({ value = 44898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44898, 'data-value': derived.doubled }, children);
}
export default Component44898;
