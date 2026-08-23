import React from 'react';
const LABEL_37316 = 'component_37316';
export function Component37316({ value = 37316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37316, 'data-value': derived.doubled }, children);
}
export default Component37316;
