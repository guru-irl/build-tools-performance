import React from 'react';
const LABEL_37492 = 'component_37492';
export function Component37492({ value = 37492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37492, 'data-value': derived.doubled }, children);
}
export default Component37492;
