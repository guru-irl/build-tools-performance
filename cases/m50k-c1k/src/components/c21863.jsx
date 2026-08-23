import React from 'react';
const LABEL_21863 = 'component_21863';
export function Component21863({ value = 21863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21863, 'data-value': derived.doubled }, children);
}
export default Component21863;
