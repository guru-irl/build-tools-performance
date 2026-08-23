import React from 'react';
const LABEL_40028 = 'component_40028';
export function Component40028({ value = 40028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40028, 'data-value': derived.doubled }, children);
}
export default Component40028;
