import React from 'react';
const LABEL_26863 = 'component_26863';
export function Component26863({ value = 26863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26863, 'data-value': derived.doubled }, children);
}
export default Component26863;
