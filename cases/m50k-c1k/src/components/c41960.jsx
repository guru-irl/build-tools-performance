import React from 'react';
const LABEL_41960 = 'component_41960';
export function Component41960({ value = 41960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41960, 'data-value': derived.doubled }, children);
}
export default Component41960;
