import React from 'react';
const LABEL_35828 = 'component_35828';
export function Component35828({ value = 35828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35828, 'data-value': derived.doubled }, children);
}
export default Component35828;
