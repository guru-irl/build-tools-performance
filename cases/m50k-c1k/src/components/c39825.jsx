import React from 'react';
const LABEL_39825 = 'component_39825';
export function Component39825({ value = 39825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39825, 'data-value': derived.doubled }, children);
}
export default Component39825;
