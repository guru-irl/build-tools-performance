import React from 'react';
const LABEL_3492 = 'component_3492';
export function Component3492({ value = 3492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3492, 'data-value': derived.doubled }, children);
}
export default Component3492;
