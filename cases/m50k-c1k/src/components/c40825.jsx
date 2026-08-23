import React from 'react';
const LABEL_40825 = 'component_40825';
export function Component40825({ value = 40825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40825, 'data-value': derived.doubled }, children);
}
export default Component40825;
