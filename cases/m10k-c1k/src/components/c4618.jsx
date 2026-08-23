import React from 'react';
const LABEL_4618 = 'component_4618';
export function Component4618({ value = 4618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4618, 'data-value': derived.doubled }, children);
}
export default Component4618;
