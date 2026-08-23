import React from 'react';
const LABEL_19807 = 'component_19807';
export function Component19807({ value = 19807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19807, 'data-value': derived.doubled }, children);
}
export default Component19807;
