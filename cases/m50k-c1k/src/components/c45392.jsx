import React from 'react';
const LABEL_45392 = 'component_45392';
export function Component45392({ value = 45392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45392, 'data-value': derived.doubled }, children);
}
export default Component45392;
