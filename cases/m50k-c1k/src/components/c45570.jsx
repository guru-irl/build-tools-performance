import React from 'react';
const LABEL_45570 = 'component_45570';
export function Component45570({ value = 45570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45570, 'data-value': derived.doubled }, children);
}
export default Component45570;
