import React from 'react';
const LABEL_40043 = 'component_40043';
export function Component40043({ value = 40043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40043, 'data-value': derived.doubled }, children);
}
export default Component40043;
