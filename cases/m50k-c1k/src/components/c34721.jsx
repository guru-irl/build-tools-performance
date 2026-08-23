import React from 'react';
const LABEL_34721 = 'component_34721';
export function Component34721({ value = 34721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34721, 'data-value': derived.doubled }, children);
}
export default Component34721;
