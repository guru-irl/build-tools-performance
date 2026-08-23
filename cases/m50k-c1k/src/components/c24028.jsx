import React from 'react';
const LABEL_24028 = 'component_24028';
export function Component24028({ value = 24028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24028, 'data-value': derived.doubled }, children);
}
export default Component24028;
