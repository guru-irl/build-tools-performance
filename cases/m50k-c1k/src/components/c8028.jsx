import React from 'react';
const LABEL_8028 = 'component_8028';
export function Component8028({ value = 8028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8028, 'data-value': derived.doubled }, children);
}
export default Component8028;
