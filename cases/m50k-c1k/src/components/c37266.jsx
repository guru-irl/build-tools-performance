import React from 'react';
const LABEL_37266 = 'component_37266';
export function Component37266({ value = 37266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37266, 'data-value': derived.doubled }, children);
}
export default Component37266;
