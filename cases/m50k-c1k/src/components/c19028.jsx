import React from 'react';
const LABEL_19028 = 'component_19028';
export function Component19028({ value = 19028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19028, 'data-value': derived.doubled }, children);
}
export default Component19028;
