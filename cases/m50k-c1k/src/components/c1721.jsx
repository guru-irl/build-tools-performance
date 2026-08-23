import React from 'react';
const LABEL_1721 = 'component_1721';
export function Component1721({ value = 1721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1721, 'data-value': derived.doubled }, children);
}
export default Component1721;
