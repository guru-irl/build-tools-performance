import React from 'react';
const LABEL_45691 = 'component_45691';
export function Component45691({ value = 45691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45691, 'data-value': derived.doubled }, children);
}
export default Component45691;
