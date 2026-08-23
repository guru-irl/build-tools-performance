import React from 'react';
const LABEL_32618 = 'component_32618';
export function Component32618({ value = 32618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32618, 'data-value': derived.doubled }, children);
}
export default Component32618;
