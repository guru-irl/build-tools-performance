import React from 'react';
const LABEL_45248 = 'component_45248';
export function Component45248({ value = 45248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45248, 'data-value': derived.doubled }, children);
}
export default Component45248;
