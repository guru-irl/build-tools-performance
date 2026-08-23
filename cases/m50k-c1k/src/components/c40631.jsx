import React from 'react';
const LABEL_40631 = 'component_40631';
export function Component40631({ value = 40631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40631, 'data-value': derived.doubled }, children);
}
export default Component40631;
