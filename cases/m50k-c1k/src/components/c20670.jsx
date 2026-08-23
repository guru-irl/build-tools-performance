import React from 'react';
const LABEL_20670 = 'component_20670';
export function Component20670({ value = 20670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20670, 'data-value': derived.doubled }, children);
}
export default Component20670;
