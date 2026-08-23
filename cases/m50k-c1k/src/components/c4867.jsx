import React from 'react';
const LABEL_4867 = 'component_4867';
export function Component4867({ value = 4867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4867, 'data-value': derived.doubled }, children);
}
export default Component4867;
