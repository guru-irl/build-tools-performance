import React from 'react';
const LABEL_18614 = 'component_18614';
export function Component18614({ value = 18614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18614, 'data-value': derived.doubled }, children);
}
export default Component18614;
