import React from 'react';
const LABEL_31721 = 'component_31721';
export function Component31721({ value = 31721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31721, 'data-value': derived.doubled }, children);
}
export default Component31721;
