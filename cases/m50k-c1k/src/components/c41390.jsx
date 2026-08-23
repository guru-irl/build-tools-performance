import React from 'react';
const LABEL_41390 = 'component_41390';
export function Component41390({ value = 41390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41390, 'data-value': derived.doubled }, children);
}
export default Component41390;
