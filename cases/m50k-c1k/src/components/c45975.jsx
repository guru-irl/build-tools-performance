import React from 'react';
const LABEL_45975 = 'component_45975';
export function Component45975({ value = 45975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45975, 'data-value': derived.doubled }, children);
}
export default Component45975;
