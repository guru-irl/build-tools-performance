import React from 'react';
const LABEL_34614 = 'component_34614';
export function Component34614({ value = 34614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34614, 'data-value': derived.doubled }, children);
}
export default Component34614;
