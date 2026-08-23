import React from 'react';
const LABEL_829 = 'component_829';
export function Component829({ value = 829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_829, 'data-value': derived.doubled }, children);
}
export default Component829;
