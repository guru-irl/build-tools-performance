import React from 'react';
const LABEL_45742 = 'component_45742';
export function Component45742({ value = 45742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45742, 'data-value': derived.doubled }, children);
}
export default Component45742;
