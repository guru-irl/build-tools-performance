import React from 'react';
const LABEL_45866 = 'component_45866';
export function Component45866({ value = 45866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45866, 'data-value': derived.doubled }, children);
}
export default Component45866;
