import React from 'react';
const LABEL_37991 = 'component_37991';
export function Component37991({ value = 37991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37991, 'data-value': derived.doubled }, children);
}
export default Component37991;
