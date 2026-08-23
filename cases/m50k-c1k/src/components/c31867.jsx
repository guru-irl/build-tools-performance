import React from 'react';
const LABEL_31867 = 'component_31867';
export function Component31867({ value = 31867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31867, 'data-value': derived.doubled }, children);
}
export default Component31867;
