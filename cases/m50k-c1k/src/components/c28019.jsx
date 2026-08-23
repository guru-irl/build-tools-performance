import React from 'react';
const LABEL_28019 = 'component_28019';
export function Component28019({ value = 28019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28019, 'data-value': derived.doubled }, children);
}
export default Component28019;
