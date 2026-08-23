import React from 'react';
const LABEL_40195 = 'component_40195';
export function Component40195({ value = 40195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40195, 'data-value': derived.doubled }, children);
}
export default Component40195;
