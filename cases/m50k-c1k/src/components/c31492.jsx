import React from 'react';
const LABEL_31492 = 'component_31492';
export function Component31492({ value = 31492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31492, 'data-value': derived.doubled }, children);
}
export default Component31492;
