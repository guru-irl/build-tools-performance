import React from 'react';
const LABEL_867 = 'component_867';
export function Component867({ value = 867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_867, 'data-value': derived.doubled }, children);
}
export default Component867;
