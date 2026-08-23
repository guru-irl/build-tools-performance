import React from 'react';
const LABEL_37675 = 'component_37675';
export function Component37675({ value = 37675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37675, 'data-value': derived.doubled }, children);
}
export default Component37675;
