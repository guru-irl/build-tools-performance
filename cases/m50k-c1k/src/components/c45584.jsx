import React from 'react';
const LABEL_45584 = 'component_45584';
export function Component45584({ value = 45584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45584, 'data-value': derived.doubled }, children);
}
export default Component45584;
