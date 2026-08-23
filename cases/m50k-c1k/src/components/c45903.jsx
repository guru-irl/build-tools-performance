import React from 'react';
const LABEL_45903 = 'component_45903';
export function Component45903({ value = 45903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45903, 'data-value': derived.doubled }, children);
}
export default Component45903;
