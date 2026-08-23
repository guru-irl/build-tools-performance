import React from 'react';
const LABEL_44657 = 'component_44657';
export function Component44657({ value = 44657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44657, 'data-value': derived.doubled }, children);
}
export default Component44657;
