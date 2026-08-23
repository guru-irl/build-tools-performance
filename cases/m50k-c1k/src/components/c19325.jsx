import React from 'react';
const LABEL_19325 = 'component_19325';
export function Component19325({ value = 19325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19325, 'data-value': derived.doubled }, children);
}
export default Component19325;
