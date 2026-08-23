import React from 'react';
const LABEL_40143 = 'component_40143';
export function Component40143({ value = 40143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40143, 'data-value': derived.doubled }, children);
}
export default Component40143;
