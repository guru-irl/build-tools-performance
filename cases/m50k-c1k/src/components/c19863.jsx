import React from 'react';
const LABEL_19863 = 'component_19863';
export function Component19863({ value = 19863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19863, 'data-value': derived.doubled }, children);
}
export default Component19863;
