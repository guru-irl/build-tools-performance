import React from 'react';
const LABEL_45614 = 'component_45614';
export function Component45614({ value = 45614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45614, 'data-value': derived.doubled }, children);
}
export default Component45614;
