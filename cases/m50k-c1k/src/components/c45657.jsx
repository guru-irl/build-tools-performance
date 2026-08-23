import React from 'react';
const LABEL_45657 = 'component_45657';
export function Component45657({ value = 45657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45657, 'data-value': derived.doubled }, children);
}
export default Component45657;
