import React from 'react';
const LABEL_13492 = 'component_13492';
export function Component13492({ value = 13492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13492, 'data-value': derived.doubled }, children);
}
export default Component13492;
