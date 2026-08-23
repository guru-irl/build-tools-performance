import React from 'react';
const LABEL_46028 = 'component_46028';
export function Component46028({ value = 46028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46028, 'data-value': derived.doubled }, children);
}
export default Component46028;
