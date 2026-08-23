import React from 'react';
const LABEL_41025 = 'component_41025';
export function Component41025({ value = 41025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41025, 'data-value': derived.doubled }, children);
}
export default Component41025;
