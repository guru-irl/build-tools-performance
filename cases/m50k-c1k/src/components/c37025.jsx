import React from 'react';
const LABEL_37025 = 'component_37025';
export function Component37025({ value = 37025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37025, 'data-value': derived.doubled }, children);
}
export default Component37025;
