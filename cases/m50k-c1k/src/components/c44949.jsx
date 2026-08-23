import React from 'react';
const LABEL_44949 = 'component_44949';
export function Component44949({ value = 44949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44949, 'data-value': derived.doubled }, children);
}
export default Component44949;
