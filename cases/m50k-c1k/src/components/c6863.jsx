import React from 'react';
const LABEL_6863 = 'component_6863';
export function Component6863({ value = 6863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6863, 'data-value': derived.doubled }, children);
}
export default Component6863;
