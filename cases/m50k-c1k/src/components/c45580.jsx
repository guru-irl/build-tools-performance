import React from 'react';
const LABEL_45580 = 'component_45580';
export function Component45580({ value = 45580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45580, 'data-value': derived.doubled }, children);
}
export default Component45580;
