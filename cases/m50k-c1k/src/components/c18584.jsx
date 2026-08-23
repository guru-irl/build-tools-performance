import React from 'react';
const LABEL_18584 = 'component_18584';
export function Component18584({ value = 18584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18584, 'data-value': derived.doubled }, children);
}
export default Component18584;
