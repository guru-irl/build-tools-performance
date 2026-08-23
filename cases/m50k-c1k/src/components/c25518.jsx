import React from 'react';
const LABEL_25518 = 'component_25518';
export function Component25518({ value = 25518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25518, 'data-value': derived.doubled }, children);
}
export default Component25518;
