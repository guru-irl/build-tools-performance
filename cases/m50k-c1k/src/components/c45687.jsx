import React from 'react';
const LABEL_45687 = 'component_45687';
export function Component45687({ value = 45687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45687, 'data-value': derived.doubled }, children);
}
export default Component45687;
