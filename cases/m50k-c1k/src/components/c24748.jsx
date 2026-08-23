import React from 'react';
const LABEL_24748 = 'component_24748';
export function Component24748({ value = 24748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24748, 'data-value': derived.doubled }, children);
}
export default Component24748;
