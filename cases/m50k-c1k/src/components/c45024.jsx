import React from 'react';
const LABEL_45024 = 'component_45024';
export function Component45024({ value = 45024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45024, 'data-value': derived.doubled }, children);
}
export default Component45024;
