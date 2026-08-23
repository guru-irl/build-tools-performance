import React from 'react';
const LABEL_45293 = 'component_45293';
export function Component45293({ value = 45293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45293, 'data-value': derived.doubled }, children);
}
export default Component45293;
