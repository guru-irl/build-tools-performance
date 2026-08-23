import React from 'react';
const LABEL_34028 = 'component_34028';
export function Component34028({ value = 34028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34028, 'data-value': derived.doubled }, children);
}
export default Component34028;
