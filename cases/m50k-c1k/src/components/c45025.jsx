import React from 'react';
const LABEL_45025 = 'component_45025';
export function Component45025({ value = 45025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45025, 'data-value': derived.doubled }, children);
}
export default Component45025;
