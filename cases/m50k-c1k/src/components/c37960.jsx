import React from 'react';
const LABEL_37960 = 'component_37960';
export function Component37960({ value = 37960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37960, 'data-value': derived.doubled }, children);
}
export default Component37960;
