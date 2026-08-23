import React from 'react';
const LABEL_7618 = 'component_7618';
export function Component7618({ value = 7618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7618, 'data-value': derived.doubled }, children);
}
export default Component7618;
