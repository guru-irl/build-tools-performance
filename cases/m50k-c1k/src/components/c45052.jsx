import React from 'react';
const LABEL_45052 = 'component_45052';
export function Component45052({ value = 45052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45052, 'data-value': derived.doubled }, children);
}
export default Component45052;
