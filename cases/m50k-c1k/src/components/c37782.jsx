import React from 'react';
const LABEL_37782 = 'component_37782';
export function Component37782({ value = 37782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37782, 'data-value': derived.doubled }, children);
}
export default Component37782;
