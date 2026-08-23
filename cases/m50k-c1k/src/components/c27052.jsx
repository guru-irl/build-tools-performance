import React from 'react';
const LABEL_27052 = 'component_27052';
export function Component27052({ value = 27052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27052, 'data-value': derived.doubled }, children);
}
export default Component27052;
