import React from 'react';
const LABEL_721 = 'component_721';
export function Component721({ value = 721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_721, 'data-value': derived.doubled }, children);
}
export default Component721;
