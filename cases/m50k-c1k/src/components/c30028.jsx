import React from 'react';
const LABEL_30028 = 'component_30028';
export function Component30028({ value = 30028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30028, 'data-value': derived.doubled }, children);
}
export default Component30028;
