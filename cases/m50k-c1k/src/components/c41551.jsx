import React from 'react';
const LABEL_41551 = 'component_41551';
export function Component41551({ value = 41551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41551, 'data-value': derived.doubled }, children);
}
export default Component41551;
