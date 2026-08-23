import React from 'react';
const LABEL_45299 = 'component_45299';
export function Component45299({ value = 45299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45299, 'data-value': derived.doubled }, children);
}
export default Component45299;
