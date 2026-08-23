import React from 'react';
const LABEL_37721 = 'component_37721';
export function Component37721({ value = 37721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37721, 'data-value': derived.doubled }, children);
}
export default Component37721;
