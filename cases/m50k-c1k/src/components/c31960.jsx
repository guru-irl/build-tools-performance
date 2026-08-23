import React from 'react';
const LABEL_31960 = 'component_31960';
export function Component31960({ value = 31960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31960, 'data-value': derived.doubled }, children);
}
export default Component31960;
