import React from 'react';
const LABEL_39867 = 'component_39867';
export function Component39867({ value = 39867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39867, 'data-value': derived.doubled }, children);
}
export default Component39867;
