import React from 'react';
const LABEL_41871 = 'component_41871';
export function Component41871({ value = 41871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41871, 'data-value': derived.doubled }, children);
}
export default Component41871;
