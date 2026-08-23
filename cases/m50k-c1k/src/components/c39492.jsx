import React from 'react';
const LABEL_39492 = 'component_39492';
export function Component39492({ value = 39492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39492, 'data-value': derived.doubled }, children);
}
export default Component39492;
