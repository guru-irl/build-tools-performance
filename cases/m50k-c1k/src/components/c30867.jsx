import React from 'react';
const LABEL_30867 = 'component_30867';
export function Component30867({ value = 30867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30867, 'data-value': derived.doubled }, children);
}
export default Component30867;
