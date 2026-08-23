import React from 'react';
const LABEL_10828 = 'component_10828';
export function Component10828({ value = 10828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10828, 'data-value': derived.doubled }, children);
}
export default Component10828;
